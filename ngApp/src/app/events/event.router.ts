import {NgModule} from '@angular/core';
import{Routes,RouterModule} from '@angular/router';
import { EventsComponent } from '../events/events.component';
const Event_router:Routes=[
    {
      path:'',
      component:EventsComponent   
    }
];
// export const eventRouter = RouterModule.forChild(Event_router);
export const overviewRoutes: Routes = [
  {
    path:'',
    component:EventsComponent   
  }
];
@NgModule({
  imports: [RouterModule.forChild(overviewRoutes)],
  exports: [RouterModule]
})
export class EventRoutingModule {
}
