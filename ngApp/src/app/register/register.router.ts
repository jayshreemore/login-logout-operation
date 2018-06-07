import{Routes,RouterModule} from '@angular/router';
import { RegisterComponent } from '../register/register.component';
const Register_router:Routes=[
    {
      path:'',
      component:RegisterComponent   
    }
];
export const registerRouter =RouterModule.forChild(Register_router);