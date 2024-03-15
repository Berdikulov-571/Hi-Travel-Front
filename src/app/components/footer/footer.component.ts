import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MainService } from '../main/services/main.service';
import { Company } from '../main/models/Company';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css',]
})
export class FooterComponent {
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
