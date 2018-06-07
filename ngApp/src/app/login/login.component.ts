import { Component, OnInit } from '@angular/core';
//import { AuthService } from '../auth.service';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData = {}
user:string;
userData;
  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit() {
//this._auth.cast.subscribe(user=>this.user=user);
  }
  loginUser () {
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
//localStorage.setItem('userData', res.userData)
var abcc=localStorage.setItem('userData', JSON.stringify(res.userData));
         var test2=localStorage.getItem('userData');
        console.log(test2);
        var test_user_data = JSON.parse(test2);
        this._auth.changeMessage(test_user_data.email);
         //this._auth.currentMessage.subscribe(message => this.message = message)
        console.log(test_user_data.email);
        this._router.navigate(['/special'])
             },
      err => console.log(err)
      
    ) 
  }

}
