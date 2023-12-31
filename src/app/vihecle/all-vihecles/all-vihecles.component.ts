import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { VihecleService } from '../vihecle.service';

@Component({
  selector: 'app-all-vihecles',
  templateUrl: './all-vihecles.component.html',
  styleUrls: ['./all-vihecles.component.css']
})
export class AllViheclesComponent implements OnInit {
  carList: Car[] = [];

  constructor(private vihecleService: VihecleService) {}

  ngOnInit() {
    
    this.vihecleService.getAllCars().subscribe((cars: Car[]) => {
      this.carList = cars; 
    });
  }

}