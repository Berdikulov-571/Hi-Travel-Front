import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Packages } from '../models/packages';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl = 'https://localhost:7254/api/Package/';

  getAllPackages(): Observable<Packages[]> {
    return this.httpClient.get<Packages[]>(this.baseUrl + "GetAll");
  }

}
