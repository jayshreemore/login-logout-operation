import { Component, OnInit } from '@angular/core';
import { EventService } from '../../shared/event.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router'
import { AuthService } from '../../shared/auth.service';
@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit { 
specialEvents = {};
 userdata:any;
 message;
 events = {}
// cart={};
  constructor(private _eventService: EventService,
              private _router: Router,private _auth: AuthService,) {             
                             }
  ngOnInit() {
    console.log('hey i am in special event');
    //calling observable
    this._auth.currentMessage.subscribe(message => this.message = message)
//this ._auth.getuserdetail().subscribe((data:any)=>{
//this.userdata=data;
   // }); console.log('hey i am in special event');
    this._eventService.getSpecialEvents()
      .subscribe(
        res => this.specialEvents = res,
        err => {
          if( err instanceof HttpErrorResponse ) {
            if (err.status === 401) {
              this._router.navigate(['/login'])
            }
          }
        }
        
      )
  }

  addtocart(e) {
    this._eventService.cart(this.events)
    .subscribe(
      res => {
        console.log();
        console.log('i am in cart');
     //localStorage.setItem('token', res.token)
        //this._router.navigate(['/special'])
      },
      err => console.log(err)
    )      
  }
}
