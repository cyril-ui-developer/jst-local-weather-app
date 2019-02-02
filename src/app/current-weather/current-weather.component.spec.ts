import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWeatherComponent } from './current-weather.component';
import { WeatherService } from '../weather/weather.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CurrentWeatherComponent', () => {
  let component: CurrentWeatherComponent;
  let fixture: ComponentFixture<CurrentWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [ CurrentWeatherComponent ],
      providers: [ WeatherService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
