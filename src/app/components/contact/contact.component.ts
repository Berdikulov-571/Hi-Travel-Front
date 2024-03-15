import { Component } from '@angular/core';
import { MainService } from '../main/services/main.service';
import { Company } from '../main/models/Company';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  companyList!: Company[];

  constructor(private companyService: MainService) {
    this.getAllCompany();
  }

  getAllCompany() {
    (this.companyService.getAllDestination().subscribe(response => {
      this.companyList = response;
    }));
  }

}
