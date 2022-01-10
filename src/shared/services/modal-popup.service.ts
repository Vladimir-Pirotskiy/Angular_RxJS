import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {IUser} from "../model/IUser";

@Injectable({
  providedIn: 'root'
})
export class ModalPopupService {

  modalPopup$ = new BehaviorSubject(false)
  user$: Subject<IUser>;

  constructor() {
    this.user$ = new Subject<IUser>();

  }

  open(user: IUser) {
    // open modal specified by id
    this.user$.next(user);
    this.modalPopup$.next(true);
  }

  close() {
    // close modal specified by id
    this.modalPopup$.next(false);

  }
}
