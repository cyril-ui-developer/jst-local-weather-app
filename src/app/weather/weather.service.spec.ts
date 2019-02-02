import { TestBed, async } from '@angular/core/testing';

import { WeatherService } from './weather.service';
import { WeatherServiceFake } from './weather.service.fake';

describe('WeatherService', () => {
//  beforeEach(() => TestBed.configureTestingModule({}));
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        providers: [{ provide: WeatherService, useClass: WeatherServiceFake}],
      });
    })
  );

  it('should be created', () => {
    const service: WeatherService = TestBed.get(WeatherService);
    expect(service).toBeTruthy();
  });
});
