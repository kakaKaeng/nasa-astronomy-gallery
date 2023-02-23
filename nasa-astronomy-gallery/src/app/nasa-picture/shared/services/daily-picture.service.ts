import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DailyPicture } from '../models/nasa.model';

@Injectable({
  providedIn: 'root'
})
export class DailyPictureService {
  private readonly apiUrl = 'https://api.nasa.gov/planetary/apod';
  private readonly apiKey = 'YOUR_API_KEY_HERE';

  constructor(private http: HttpClient) { }

  getDailyPicture(): Observable<HttpResponse<DailyPicture>> {
    const url = `${this.apiUrl}?api_key=${this.apiKey}`;
    return this.http.get<HttpResponse<DailyPicture>>(url);
  }
}
