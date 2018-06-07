import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events = []
  test = 'New Test';
  constructor(private _eventService: EventService) { }
  ngOnInit() {
    console.log('Test');
    this._eventService.getEvents()
      .subscribe(
        res => this.events = res,
        err => console.log(err)
      )
  }

}
