import { Injectable } from '@angular/core';
import { Destination } from '../models/destination';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl = 'https://localhost:7254/api/Destination/';

  getAllDestination(): Observable<Destination[]> {
    return this.httpClient.get<Destination[]>(this.baseUrl + "GetAll");
  }
}
