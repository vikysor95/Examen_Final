import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tendaMascota';

  constructor(private router:Router)
  {}
  pass;
  user;


  Login()
  {
    this.router.navigate(['home-page']);
  }

 

}
