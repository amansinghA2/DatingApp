import { AuthService } from './../_services/Auth.service';
import { Injectable } from '@angular/core';
import { CanActivate , Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService:AuthService , private router:Router) {}

  canActivate(): boolean  {
    if(this.authService.loggedIn()){
      return true;
    }
    
    this.router.navigate(['/home']);
    return false;
    
  }
  
  

}
