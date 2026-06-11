import { Component, OnInit } from '@angular/core';
import { Api  } from '../services/api';

@Component({
  selector: 'app-call-apiexercise',
  templateUrl: './call-apiexercise.page.html',
  styleUrls: ['./call-apiexercise.page.scss'],
  standalone : false
})
export class CallAPIExercisePage implements OnInit {

    GetWeatherData(){
    this.api.getUsers().subscribe(response => {
      this.weatherData = response;
      console.log(this.weatherData)
    })
  }

  constructor(private api : Api) {

    this.GetWeatherData();
   }

  weatherData : any [] = []


  ngOnInit() {
  }

}
