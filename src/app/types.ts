export interface WeatherData{
  time: string,
  now:{
    temperature: number,
    humidity: number,
    windDirection: string,
    windSpeed: number,
  }
  nextHour:string,
  next6Hours:string,
  next12Hours: string
}
