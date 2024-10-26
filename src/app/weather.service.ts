import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey: string = 'c08a51e2cf3151785eb22c6f99a62077'; // Replace with your actual API key
  private apiUrl: string = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    // Use encodeURIComponent to encode the city name
    const encodedCity = encodeURIComponent(city);
    return this.http.get(`${this.apiUrl}?q=${encodedCity}&appid=${this.apiKey}&units=metric`);
  }
}
