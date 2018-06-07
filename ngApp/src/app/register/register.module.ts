import { NgModule } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import{ registerRouter } from './register.router';
@NgModule({
    declarations:[LoginComponent],
    imports:[registerRouter]
})
export class RegisterModule {
}