import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MainService } from '../main/services/main.service';
import { Company } from '../main/models/Company';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', '../../../assets/css/main.css']
})
export class HeaderComponent {

  companyList!: Company[];

  constructor(private translateService: TranslateService, private companyService: MainService) {
    this.getAllCompany();
  }

  public selectedLanguage(event: string) {
    this.translateService.use(event);
  }


  getAllCompany() {
    (this.companyService.getAllDestination().subscribe(response => {
      this.companyList = response;
    }));
  }

}