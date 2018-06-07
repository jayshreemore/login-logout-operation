import{Routes,RouterModule} from '@angular/router';
import { LoginComponent } from '../login/login.component';
const Login_router:Routes=[
    {
      path:'',
      component:LoginComponent   
    }
];
export const loginRouter =RouterModule.forChild(Login_router);