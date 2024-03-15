import { Component } from '@angular/core';
import { Packages } from './models/packages';
import { PackagesService } from './services/packages.service';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrl: './package.component.css'
})
export class PackageComponent {

  packagesList!: Packages[];

  constructor(private packagesService: PackagesService) {
    this.getAllPackagesList();
  }

  getAllPackagesList() {
    (this.packagesService.getAllPackages().subscribe(response => {
      this.packagesList = response;
      console.log(this.packagesList);
    }));
  }

}
