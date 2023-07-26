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
    this.carList = this.vihecleService.getCarsByOwner();
  }

}