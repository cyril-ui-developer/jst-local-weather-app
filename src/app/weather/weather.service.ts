import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';


import { environment } from '../../environments/environment';
import { ICurrentWeather } from '../interfaces';

interface ICurrentWeatherData {
  weather: [{
    description: string,
    icon: string
  }];
  main: {
    temp: number
  };
  sys: {
    country: string
  };
  dt: number;
  name: string;
}


export interface IWeatherService {
  getCurrentWeather(search: string | number, country: string): Observable<ICurrentWeather>;
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService implements IWeatherService {

  currentWeather = new BehaviorSubject<ICurrentWeather>({
    city: '__',
    country: '__',
    date: Date.now(),
    image: '',
    temperature: 0,
    description: '',
  });
  constructor(private httpClient: HttpClient) { }

  // getCurrentWeather(city: string, country: string): Observable<ICurrentWeather> {
  //   return this.httpClient
  // .get<ICurrentWeatherData>(
  //   `${environment.baseUrl}api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${environment.appId}`
  // ).pipe(
  //   map(data =>
  //     this.transformToICurrentWeather(data)
  //   )
  // );
  // }

  getCurrentWeather(
    search: string | number,
    country?: string
  ): Observable<ICurrentWeather> {
    let uriParams = '';
    if (typeof search === 'string') {
      uriParams = `q=${search}`;
    } else {
      uriParams = `zip=${search}`;
    }

    if (country) {
      uriParams = `${uriParams},${country}`;
    }

    return this.getCurrentWeatherHelper(uriParams);
  }

  private getCurrentWeatherHelper(uriParams: string): Observable<ICurrentWeather> {
    return this.httpClient
      .get<ICurrentWeatherData>(
        `${environment.baseUrl}api.openweathermap.org/data/2.5/weather?` +
          `${uriParams}&appid=${environment.appId}`
      )
      .pipe(map(data => this.transformToICurrentWeather(data)));
  }

  private transformToICurrentWeather(data: ICurrentWeatherData): ICurrentWeather {
    return {
      city: data.name,
      country: data.sys.country,
      date: data.dt * 1000,
      image: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
      temperature: this.convertKelvinToFahrenheit(data.main.temp),
      description: data.weather[0].description
    };
  }

  private convertKelvinToFahrenheit(kelvin: number): number {
    return kelvin * 9 / 5 - 459.67;
  }
}
