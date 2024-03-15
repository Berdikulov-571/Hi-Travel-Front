import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Company } from './models/Company';
import { MainService } from './services/main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css',]
})
export class MainComponent {

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
