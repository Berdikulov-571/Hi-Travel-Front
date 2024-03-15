import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Travel';

  constructor(private translateService: TranslateService) {
  }

  public selectedLanguage(event: any) {
    this.translateService.use(event.target.value);
  }

}
