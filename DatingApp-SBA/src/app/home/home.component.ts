import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  values:any;
  isRegisterMode = false;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getValues();
  }

  register(){
      this.isRegisterMode = true
  }

  getValues(){
    this.http.get("http://localhost:5000/api/WeatherForecast").subscribe(response => {
        this.values = response
    }, error => {
        console.log(error)
    })
  }

  cancel(isRegisterMode:boolean){
    this.isRegisterMode = isRegisterMode;
  }

}
