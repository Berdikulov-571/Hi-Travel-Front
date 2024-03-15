import { Component } from '@angular/core';
import { DestinationService } from './services/destination.service';
import { Destination } from './models/destination';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrl: './destinations.component.css'
})
export class DestinationsComponent {

  destinationList!: Destination[];

  constructor(private destinationService: DestinationService) {
    this.getAllDestinationList();
  }

  getAllDestinationList() {
    (this.destinationService.getAllDestination().subscribe(response => {
      this.destinationList = response;
      console.log(this.destinationList);
    }));
  }

}
