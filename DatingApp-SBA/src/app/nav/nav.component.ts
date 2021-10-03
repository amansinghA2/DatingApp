import { AuthService } from './../_services/Auth.service';
import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../_services/Alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  model : any = {}

  constructor(private authService:AuthService , private alertify:AlertifyService , private router:Router) { }

  ngOnInit() {
  
  }

  login(){

    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Login Success');
    }, error => {
      this.alertify.error(error);
    }, () =>{
        this.router.navigate(['/home'])
    });
    
  }


  loggedIn(){
    const token = localStorage.getItem('token')
    return !!token;
  }

  logout(){
    localStorage.removeItem('token')
    this.alertify.message('logout successfull');
  }

}
