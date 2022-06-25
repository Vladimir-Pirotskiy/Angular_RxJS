import {Component, OnInit} from '@angular/core';
import {trigger, keyframes, transition, animate, style, state} from "@angular/animations";
import {moveInLeft, moveInRight} from "../../animations";

@Component({
  selector: 'zesty-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [moveInLeft, moveInRight]
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
