import { Component, OnInit, Input } from '@angular/core';
import { ICurrentWeather } from '../interfaces';
import { WeatherService } from '../weather/weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {

  @Input() current: ICurrentWeather;

  constructor(private weatherService: WeatherService) {
    this.current = {
      city: 'Bethesda',
      country: 'US',
      date: 3456789,
      image: 'assets/img/sunny.svg',
      temperature: 72,
      description: 'sunny',
    } as ICurrentWeather;
  }

  ngOnInit() {
    this.weatherService.getCurrentWeather('Cary', 'US')
    .subscribe((data) => this.current = data);
  }

  getOrdinal(date: number) {
    const n = new Date(date).getDate();
    return n > 0
      ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10]
      : '';
  }
}
