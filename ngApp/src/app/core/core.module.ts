import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialEventsComponent } from '../core/special-events/special-events.component';
import{ coreRouter } from './core.router';
import { AuthService } from '../shared/auth.service';
import { EventService } from '../shared/event.service';
import { TokenInterceptorService } from '../shared/token-interceptor.service';
import { AuthGuard } from '../shared/guard/auth.guard';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//import { TrackLocationComponent } from './track-location/track-location.component';
@NgModule({
    declarations:[SpecialEventsComponent],
    imports:[coreRouter,CommonModule],
    providers: [AuthService,AuthGuard, EventService, 
        {
          provide: HTTP_INTERCEPTORS,
          useClass: TokenInterceptorService,
          multi: true
        }],
})
export class CoreModule {
}