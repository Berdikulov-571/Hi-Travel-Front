import { Component } from '@angular/core';
import { MainService } from '../main/services/main.service';
import { Company } from '../main/models/Company';
import { ContactService } from './services/contact.service';
import { response } from 'express';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  companyList!: Company[];

  constructor(private companyService: MainService, private contactService: ContactService) {
    this.getAllCompany();
  }

  getAllCompany() {
    (this.companyService.getAllDestination().subscribe(response => {
      this.companyList = response;
    }));
  }

  async createNotification() {
    let InputName = document.querySelector('#inputName') as HTMLInputElement;
    let InputEmail = document.querySelector('#inputEmail') as HTMLInputElement;
    let InputPhoneNumber = document.querySelector('#inputPhoneNumber') as HTMLInputElement;
    let InputSubject = document.querySelector('#inputSubject') as HTMLInputElement;
    let InputComment = document.querySelector('#inputComment') as HTMLInputElement;

    let formData = new FormData();
    formData.append('clientName', InputName.value);
    formData.append('clientPhone', InputPhoneNumber.value);
    formData.append('clientEmail', InputEmail.value);
    formData.append('subject', InputSubject.value);
    formData.append('message', InputComment.value);

    (this.contactService.createNotification(formData).subscribe(response => {
      console.log(response);
      location.reload();
    }));
  }

}
