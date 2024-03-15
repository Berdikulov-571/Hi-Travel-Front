import { Injectable } from '@angular/core';
import { Company } from '../models/Company';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl = 'https://localhost:7254/api/Agency/';

  getAllDestination(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(this.baseUrl + "GetAll");
  }
}
