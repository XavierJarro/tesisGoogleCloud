import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router,
              public auth: AuthService) { }

  ngOnInit() {
  }
  
  salir() {
    this.auth.logout();
    //this.router.navigateByUrl('/home');
    window.location.reload();
  }

  ingresar(){
    this.router.navigateByUrl('/login');
  }

}
