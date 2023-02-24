import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NasaImage } from '../models/nasa.model';

@Injectable({
  providedIn: 'root'
})
export class NasaImageService {
  private readonly apiUrl = `https://images-api.nasa.gov`;

  constructor(private http: HttpClient) {
  }

  onGetSearchImage(params: HttpParams): Observable<NasaImage> {
    return this.http.get<NasaImage>(this.apiUrl + '/search', {params: params})
  }
}
