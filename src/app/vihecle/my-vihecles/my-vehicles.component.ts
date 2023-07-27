import { Component, OnInit } from '@angular/core';
import { VihecleService } from '../vihecle.service';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-my-vehicles',
  templateUrl: './my-vehicles.component.html',
  styleUrls: ['./my-vehicles.component.css']
})
export class MyVehiclesComponent implements OnInit {
  carList: Car[] = [];

  constructor(private vihecleService: VihecleService) {}

  ngOnInit() {
    this.vihecleService.getCarsByOwner().subscribe(
      (cars: Car[]) => {
        this.carList = cars;
      },
      (error) => {
        console.error('Error fetching cars:', error);
        // Handle error if necessary
      }
    );
  }

  delete(carid: string) {
    this.vihecleService.deleteCar(carid);
  }
}
