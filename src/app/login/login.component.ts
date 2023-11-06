import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from '../service/authentication-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  invalidLogin = false

  ngOnInit(): void {
    console.log("LoginComponent - ngOnInit initiated")
  }

  constructor(
    private router: Router,
    private loginService: AuthenticationServiceService
  ) {
    console.log("LoginComponent - constructor called")
  }

  reDirectToHome(): void {
    this.router.navigateByUrl('/')
  }

  authenticateUser(){
    console.log("In authenticateUser of LoginComponent")
    if(this.loginService.authenticateUser(this.username, this.password)) {
      this.router.navigate(['/dashboard'])
      this.invalidLogin = false
    }else{
      this.invalidLogin = true
    }
  }

}
