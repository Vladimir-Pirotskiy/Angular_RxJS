import {ChangeDetectorRef, Component, OnChanges, OnInit} from '@angular/core';
import {mergeMap, Observable, ReplaySubject, scan, Subject, take, tap, toArray} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {IUser} from "../../../shared/model/IUser";
import {delay, startWith} from 'rxjs/operators';
import {UserService} from "../../../shared/services/user.service";
import {ModalPopupService} from "../../../shared/services/modal-popup.service";

@Component({
  selector: 'zesty-user-details-table',
  templateUrl: './user-details-table.component.html',
  styleUrls: ['./user-details-table.component.scss']
})
export class UserDetailsTableComponent implements OnInit {
  range: number;
  isLoaded$: Subject<boolean>;
  users$: ReplaySubject<IUser[]>;

  constructor(private userService: UserService, private modalPopupService: ModalPopupService) {
    this.range = 0;
    this.users$ = this.userService.users$;
    this.isLoaded$ = this.userService.isLoaded$
  }

  ngOnInit(): void {
  }

  onRangeChange() {
    this.userService.getPreparedUsers(this.range);
  }

  onUserClick(user: IUser){
    this.modalPopupService.open(user)
  }
}

