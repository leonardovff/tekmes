import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from 'rxjs/Rx';
import { AngularFire, AuthProviders } from 'angularfire2';

@Injectable()
export class AuthService {
  private authenticated = false;
  user:any = {};
  constructor(
    private router: Router,
    public af: AngularFire
  ) {
    this.af.auth.subscribe(user => {
      if(user) {
        // user logged in
        this.authenticated = true;
        return this.user = user;
      }
      // user not logged in
      this.authenticated = false;
      this.user = {};
    });
  }
  isAuthenticated() {
    return this.authenticated;
  }
}
