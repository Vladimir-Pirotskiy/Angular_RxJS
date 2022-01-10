import {Component, ElementRef, OnInit} from '@angular/core';
import {ModalPopupService} from "../../shared/services/modal-popup.service";
import {Subject} from "rxjs";
import {UserService} from "../../shared/services/user.service";
import {IUser} from "../../shared/model/IUser";

@Component({
  selector: 'zesty-modal-popup-dialog',
  templateUrl: './modal-popup-dialog.component.html',
  styleUrls: ['./modal-popup-dialog.component.scss']
})
export class ModalPopupDialogComponent implements OnInit {
  private element: any;
  modalPopup$: Subject<boolean>;
  user: IUser | undefined;

  constructor(private el: ElementRef, private modalPopupService: ModalPopupService, private userService: UserService) {
    this.element = el.nativeElement;
    this.modalPopup$ = this.modalPopupService.modalPopup$;
    this.modalPopupService.user$.subscribe(data => this.user = data);
  }

  ngOnInit(): void {}

  open(user: IUser): void {
    this.modalPopupService.open(user);
  }

  close(): void {
    this.modalPopupService.close();

  }

}
