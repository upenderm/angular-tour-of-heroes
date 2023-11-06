import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent {
  
  constructor(private router: Router) {}

  // this method is not in use now
  public redirectToLogin() {
    console.log("**********************");
    this.router.navigateByUrl('login')
  }

  public redirectToAngularLearnings() {
    console.log("redirectToAngularLearnings");
    // this.router.navigate(['angular-tutorial']);
    this.router.navigateByUrl('angular-tutorial')
  }
}
