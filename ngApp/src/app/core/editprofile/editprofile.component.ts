import { Component, OnInit } from '@angular/core';
//import { AuthService } from '../auth.service';
import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  loginUserData = {}
  btnText: string = 'Add an Item';
  constructor(private _auth: AuthService,
    private _router: Router) { }
  ngOnInit() {
    var test2=localStorage.getItem('userData');
    console.log('hello edit ');
    console.log(test2);
    var obj = JSON.parse(test2);
    console.log(obj.email);
    console.log(obj.password);
    var test_user_data = JSON.parse(test2);
  }

}
