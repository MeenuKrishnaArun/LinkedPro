import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SignInData } from './model/signInData';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

   mockedUser=new SignInData('meenukrishna@mail.com','test123');
  isAuthenticated=false;
  
  constructor( private router:Router)
  { 
  }

  getUserId()
  {
    return this.mockedUser.getEmail();
  }
  authenticate(signInData:SignInData)
  {
    if(this.checkCredentials(signInData))

      {
         this.isAuthenticated=true;
         return true;
      }
      this.isAuthenticated=false;
      return false;
  }


    private checkCredentials(signInData:SignInData)
   
    {
       return this.checkEmail(signInData.getEmail()) && this.checkPassword(signInData.getPassword());

     }


  private checkEmail(email:string)
  {
    return email === this.mockedUser.getEmail();
  }


  private checkPassword(password:string)
  {
    return password === this.mockedUser.getPassword();
  }
  logout()
  {
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }
}

