import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger, state} from "@angular/animations";
import {buttonHover} from "../../animations";
import {UserService} from "../../../shared/services/user.service";
import {Subject} from "rxjs";

@Component({
  selector: 'zesty-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [buttonHover]
})
export class FooterComponent implements OnInit {
  isLoaded$: Subject<boolean>;

  buttons: any = [
    {value: 'Find', state: 'inactive'},
    {value: 'Request', state: 'inactive'},
    {value: 'Download', state: 'inactive'},
    {value: 'Contact us', state: 'inactive'},
    {value: 'Submit', state: 'inactive'},
    {value: 'Work with us', state: 'inactive'}
]

  constructor(private userService: UserService) {
    this.isLoaded$ = this.userService.isLoaded$
  }

  ngOnInit(): void {
  }

  toggleState(button: any) {
    button.state = button.state === 'active' ? 'inactive' : 'active';
  }
}
