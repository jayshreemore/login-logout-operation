import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthService {

  private _registerUrl = "http://localhost:3000/api/register";
  private _loginUrl = "http://localhost:3000/api/login";
  private _getuser = "http://localhost:3000/api/getuser";
 

//private user = new BehaviorSubject<string>('john');
 // cast = this.user.asObservable();
 private messageSource = new BehaviorSubject<any>("default message");
  currentMessage = this.messageSource.asObservable();



  constructor(private http: HttpClient,
    
    private _router: Router) { }

    ///calling observable
    changeMessage(message: any) {
      console.log(message);
       this.messageSource.next(message)
     }
     getmessage(){
      return this.currentMessage;
    }
    /////behaviour subject
/*editUser(newUser){

  this.user.next(newUser);
}*/
  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user)
  }

  public localStorageItem(id: string): string {
    return localStorage.getItem(id);
}


///for getting userdetails when user login
getuserdetail()
{
return this.http.get(this._getuser,
  {headers:new HttpHeaders({'Authorization':'Bearer'+localStorage.getItem('userToken')})});
//'Authorization':'Bearer'+localStorage.getItem('userToken')
}
////////////////////////////////////////////////////
  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user);
    ////////////behavioural subject 
   // this.user.next(user)
  }

  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/events'])
  }

  getToken() {
    return localStorage.getItem('token')
  }

  loggedIn() {
    return !!localStorage.getItem('token')    
  }
}
