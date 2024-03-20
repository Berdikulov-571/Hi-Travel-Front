import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateNotificationCommand } from '../models/CreateNotificationCommand';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl = 'https://localhost:7254/api/Notification/Create';

  createNotification(formData: FormData) {
    return this.httpClient.post<CreateNotificationCommand>(this.baseUrl, formData);
  }
}
