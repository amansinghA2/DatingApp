import { AuthService } from './../_services/Auth.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Input() valuesForHome:any;
  @Output() cancelEvent = new EventEmitter();
  
  model:any = {};

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  register(){
    this.authService.register(this.model).subscribe(() =>{
      console.log('registration successful')
    }, error => {
      console.log(error)
    })
  }

  cancel(){
    this.cancelEvent.emit(false);
    console.log("cancelled")
  }

}
