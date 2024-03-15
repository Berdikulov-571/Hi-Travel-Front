import { Component } from '@angular/core';
import { BookingService } from './services/booking.service';
import { Packages } from '../package/models/packages';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {

  packagesList!: Packages[];

  constructor(private bookingService: BookingService) {
    this.getAllPackagesList();
  }

  getAllPackagesList() {
    (this.bookingService.getAllPackages().subscribe(response => {
      this.packagesList = response;
      console.log(this.packagesList);
    }));
  }

  async CreateBooking() {
    let InputFirstName = document.querySelector('#firstName') as HTMLInputElement;
    let InputLastName = document.querySelector('#lastName') as HTMLInputElement;
    let InputEmail = document.querySelector('#email') as HTMLInputElement;
    let InputPhoneNumber = document.querySelector('#phoneNumber') as HTMLInputElement;
    let InputAdults = document.querySelector('#adults') as HTMLInputElement;
    let InputChilds = document.querySelector('#childs') as HTMLInputElement;
    let InputCheckIn = document.querySelector('#datepicker-2') as HTMLInputElement;
    let InputCheckOut = document.querySelector('#datepicker-3') as HTMLInputElement;
    let InputSelectedTour = document.querySelector('#selectElement') as HTMLInputElement;

    let selected = this.packagesList.find(x => x.id === parseInt(InputSelectedTour.value));

    let formData = new FormData();
    formData.append('firstName', InputFirstName.value);
    formData.append('lastName', InputLastName.value);
    formData.append("idPackage", `${selected!.id}`);
    formData.append("personCount", `${(parseInt(InputAdults.value) + parseInt(InputChilds.value))}`);
    formData.append("price", `${selected!.price}`);
    formData.append("phoneNumber", InputPhoneNumber.value);
    formData.append("email", InputEmail.value);
    formData.append("startDate", `${new Date(InputCheckIn.value)}`);
    formData.append("endDate", `${new Date(InputCheckOut.value)}`);
    formData.append("date", Date.now.toString());

    console.log(InputFirstName.value);
    console.log(InputLastName.value);
    console.log(InputEmail.value);
    console.log(InputPhoneNumber.value);
    console.log(InputAdults.value);
    console.log(InputChilds.value);
    console.log(InputCheckIn.value);
    console.log(InputCheckOut.value);
    console.log(InputSelectedTour.value);
    console.log(selected?.id);

    (this.bookingService.createCompany(formData))
      .subscribe(response => {
        console.log(response);
        alert("Salomat  rahmat! 👌");
      })
  }
}
