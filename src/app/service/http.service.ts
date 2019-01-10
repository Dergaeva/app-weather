import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Weather} from '../weather';

@Injectable()
export class HttpService {

  constructor(private http:HttpClient) {
  }

  postData():Observable<Weather> {

    const url = 'https://api2.climacell.co/v2/historical';

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'apikey': 'YLH3YPv6i4nULcPwGOSwwRXBvkz5utj8'
      })
    };

    const body = {
      'geocode': {
        'lon': -71.3020887916,
        'lat': 44.2691622567
      },
      'location_id': '',
      'start_time': '2018-03-19T09:00:00Z',
      'end_time': '2018-03-19T18:00:00Z',
      'timestep': 60,
      'fields': [
        {
          'name': 'temp',
          'units': 'F'
        },
        {
          'name': 'wind_speed',
          'units': 'mph'
        },
        {
          'name': 'wind_gust',
          'units': 'mph'
        }
      ]
    };
    const response = this.http.post<any>(url, body, httpOptions);
    return response;
  }
}
