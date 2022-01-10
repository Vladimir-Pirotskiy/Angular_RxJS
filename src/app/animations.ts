import {
  trigger,
  animate,
  transition,
  style,
  state, keyframes
} from '@angular/animations';

export const moveInLeft = trigger("moveInLeft", [
  transition('void => *', [
    animate('1s ease-out', keyframes([
      style({opacity: 0, transform: 'translateX(-100px)', offset: 0}),
      style({transform: 'rotate(100deg)', offset: 0.6}),
      style({opacity: 0, transform: 'translateX(10px)', offset: 0.8}),
      style({opacity: 1, transform: 'translate(0)', offset: 1})
    ]))
  ])
]);

export const moveInRight =  trigger("moveInRight", [
  transition('void => *', [
    animate('1s ease-out', keyframes([
      style({opacity: 0, transform: 'translateX(100px)', offset: 0}),
      style({opacity: 0, transform: 'translateX(-10px)', offset: 0.8}),
      style({opacity: 1, transform: 'translate(0)', offset: 1})
    ]))
  ])
]);

export const buttonHover =  trigger('buttonHover', [
  state('inactive', style({
    backgroundColor: '#343a40',
    transform: 'translateY(0)'
  })),
  state('active', style({
    backgroundColor: '#495057',
    transform: 'translateY(-3px)'
  })),
  transition('inactive => active', animate('200ms ease-in')),
  transition('active => inactive', animate('200ms ease-out'))
]);
