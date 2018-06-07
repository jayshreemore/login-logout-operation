import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './core/special-events/special-events.component';
//import { AuthGuard } from './auth.guard';
import { AuthGuard } from './shared/guard/auth.guard';
//mport { EditprofileComponent } from './editprofile/editprofile.component';
import { EditprofileComponent } from './core/editprofile/editprofile.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/events',
    pathMatch: 'full'
  },
  {
    path: 'events',
    // component: EventsComponent
    loadChildren:'app/events/event.module#EventModule'
  },
  {
    path: 'special',
      canActivate: [AuthGuard],
    //component: SpecialEventsComponent,
    loadChildren:'app/core/core.module#CoreModule'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
 {
    path: 'editprofile',
    canActivate: [AuthGuard],
    component: EditprofileComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
