import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { WeatherService } from '../weather/weather.service';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.scss']
})
export class CitySearchComponent implements OnInit {

  search = new FormControl('', [Validators.minLength(2)])
  @Output() searchEvent = new EventEmitter<string>();

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.search.valueChanges.pipe(debounceTime(1000)).subscribe((searchValue: string) => {
      if (!this.search.invalid) {
        this.searchEvent.emit(searchValue);
        const userInput = searchValue.split(',').map(s => s.trim());
        this.weatherService
          .getCurrentWeather(
            userInput[0],
            userInput.length > 1 ? userInput[1] : undefined
          )
          .subscribe(data => this.weatherService.currentWeather.next(data));
      }


    });

  }
}
