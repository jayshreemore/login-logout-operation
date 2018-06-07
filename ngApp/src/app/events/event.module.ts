import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EventsComponent } from '../events/events.component';
import{ EventRoutingModule } from './event.router';
import { AuthService } from '../shared/auth.service';
//import { EventService } from './event.service';
import { EventService } from '../shared/event.service';
@NgModule({
    declarations:[EventsComponent],
    imports:[EventRoutingModule, CommonModule],
    providers: [AuthService, EventService]
})
export class EventModule {
}