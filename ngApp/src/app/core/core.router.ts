import{Routes,RouterModule} from '@angular/router';
import { SpecialEventsComponent } from '../core/special-events/special-events.component';
import { EditprofileComponent } from '../core/editprofile/editprofile.component';
import { EventService } from '../shared/event.service';
import { TokenInterceptorService } from '../shared/token-interceptor.service';
import { AuthGuard } from '../shared/guard/auth.guard';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
const core_router:Routes=[
    {
      path:'',
      component:SpecialEventsComponent   
    },  
];
export const coreRouter =RouterModule.forChild(core_router);