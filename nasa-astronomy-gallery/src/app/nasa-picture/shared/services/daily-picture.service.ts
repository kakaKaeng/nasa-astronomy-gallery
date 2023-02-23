import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DailyPicture } from '../models/nasa.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DailyPictureService {
  private readonly apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${environment.nasaApiKey}`;

  constructor(private http: HttpClient) { }

  getDailyPicture(params: HttpParams): Observable<HttpResponse<DailyPicture>> {
    return this.http.get<HttpResponse<DailyPicture>>(this.apiUrl, {params: params});
  }
}
