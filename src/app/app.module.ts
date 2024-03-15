import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { PackageComponent } from './components/package/package.component';
import { HttpClient, HttpClientModule, } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { PipePipe } from './pipe/pipe.pipe';
import { BookingComponent } from './components/booking/booking.component';


export function Header(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/languages/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AboutComponent,
    ContactComponent,
    SignInComponent,
    SignUpComponent,
    DestinationsComponent,
    PackageComponent,
    PipePipe,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'ru',
      loader: [{
        provide: TranslateLoader,
        useFactory: Header,
        deps: [HttpClient]
      }
      ]
    })
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
