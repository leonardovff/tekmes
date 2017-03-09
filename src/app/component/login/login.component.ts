import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders } from 'angularfire2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public af: AngularFire,
    private router: Router
  ) {
      this.af.auth.subscribe(user => {
      if(user) {
        // user logged in
        return this.router.navigate(['/']);
      }
    });
  }

  ngOnInit() {
  }
  login(){
    this.af.auth.login({
      provider: AuthProviders.Google
    });

  }
}
