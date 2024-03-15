import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MainComponent } from './components/main/main.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { PackageComponent } from './components/package/package.component';
import { BookingComponent } from './components/booking/booking.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MainComponent, title: 'Home' },
  { path: 'about', component: AboutComponent, title: 'About' },
  { path: 'contact', component: ContactComponent, title: 'Contact' },
  { path: 'tours', component: PackageComponent, title: 'Tours' },
  { path: 'booking', component: BookingComponent, title: 'Booking' },
  { path: 'destinations', component: DestinationsComponent, title: 'Places' },
  { path: '**', component: MainComponent },
  // { path: 'sign-in', component: SignInComponent, title: 'Sign-In' },
  // { path: 'sign-up', component: SignUpComponent, title: 'Sign-Up' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
