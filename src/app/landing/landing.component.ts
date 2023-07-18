import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  constructor(public router: Router) { }

  title: string = "WELCOME TO U-CODE CAMP";
  discription: string = "Paid Web-development courses available on U-code camp. Explore us on click the button."
  copyright:string = "Copyright © Umer Malik";
  exploreCourses() {
    return this.router.navigate(['/home'])
  }
}
