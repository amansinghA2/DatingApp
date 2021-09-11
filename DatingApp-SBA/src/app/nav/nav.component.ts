import { AuthService } from './../_services/Auth.service';
import { Component, OnInit } from '@angular/core';

declare var alertify:any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  model : any = {}

  constructor(private authService:AuthService) { }

  ngOnInit() {
  
  }

  login(){

    this.authService.login(this.model).subscribe(next => {
      alertify.success('Login Success');
    }, error => {
      alertify.error(error);
    });
    
  }


  loggedIn(){
    const token = localStorage.getItem('token')
    return !!token;
  }

  logout(){
    localStorage.removeItem('token')
    alertify.message('logout successfull');
  }

}
