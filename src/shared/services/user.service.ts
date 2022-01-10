import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, ReplaySubject, Subject, switchMap, timer} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {IUser} from "../model/IUser";
import {delay, startWith} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  range;
  isLoaded$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  users$: ReplaySubject<IUser[]> = new ReplaySubject<IUser[]>(1);

  private USER_URL_STAGING = ' https://v82tr0s6oa.execute-api.us-east-1.amazonaws.com/dev/';
  private USER_URL_PRODUCTION = 'https://gne5ydctv0.execute-api.us-east-1.amazonaws.com/prod/';

  constructor(private http:HttpClient) {
    this.range = 0;
  }

  getUser(): Observable<IUser> {
    return this.http.get(this.USER_URL_PRODUCTION);
  }

  getRangeOfUsers(range: number) {
    this.isLoaded$.next(range === 0)
    let arr: IUser[] = [];

    for (let i = 0; i < range; i++) {
      this.getUser()
        .pipe(delay(2500))
        .subscribe({
            next: data => arr.push(data),
            error: err => console.log(err),
            complete: () => {
              console.log('here')
              console.log(arr)
              this.users$.next(arr);
              this.isLoaded$.next(arr.length === range)
            }
          }
        )
    }
  }

  getPreparedUsers(range: number){
    this.getRangeOfUsers(range);
    return this.users$;
  }
}
