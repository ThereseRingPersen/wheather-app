import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { WeatherData } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather-app';
  public data: WeatherData | null = null;

  constructor(public apiService: ApiService){}

  public ngOnInit():void{
    this.getWeather();
  }

  public getWeather() {
    this.apiService.getWeather().subscribe((data: any) => {
      if(data){
        const temp= data.properties.timeseries[0];
        this.data= {
          time: temp.time,
          now:{
            temperature:temp.data.instant.details.air_temperature,
            humidity: temp.data.instant.details.relative_humidity,
            windDirection: temp.data.instant.details.wind_from_directions,
            windSpeed: temp.data.instant.details.wind_speed,
          },
          nextHour:temp.data.next_1_hours.summary.symbol_code?? '',
          next6Hours: temp.data.next_6_hours.summary.symbol_code ??'',
          next12Hours: temp.data.next_12_hours.summary.symbol_code ?? ''
        }
      }
    });
  }
}
