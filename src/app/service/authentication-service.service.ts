import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor(){
    console.log("In constructor of AuthenticateServiceComponent")
  }

  authenticateUser(username: string, password: string) {
    if(username===password){
      return true
    } else {
      return false
    }
  }
}
