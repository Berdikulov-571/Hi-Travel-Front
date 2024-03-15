import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Packages } from '../../package/models/packages';
import { Observable } from 'rxjs';
import { CreateBookingCommand } from '../models/BookingCreateDto';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl = 'https://localhost:7254/api/Package/';
  private url = 'https://localhost:7254/api/Booking/Create';

  getAllPackages(): Observable<Packages[]> {
    return this.httpClient.get<Packages[]>(this.baseUrl + "GetAll");
  }

  createCompany(model: FormData) {
    return this.httpClient.post<CreateBookingCommand>(this.url, model);
  }

}
