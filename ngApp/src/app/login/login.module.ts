import { NgModule } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import{ loginRouter } from './login.router';
@NgModule({
    declarations:[LoginComponent],
    imports:[loginRouter]
})
export class LoginModule {
}
