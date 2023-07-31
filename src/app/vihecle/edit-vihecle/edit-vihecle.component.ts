import { Component, OnInit } from '@angular/core';
import { VihecleService } from '../vihecle.service';
import { Car } from 'src/app/models/car';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-vihecle',
  templateUrl: './edit-vihecle.component.html',
  styleUrls: ['./edit-vihecle.component.css']
})
export class EditVihecleComponent implements OnInit {
  car:any

  constructor(private vihecleService: VihecleService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const carId = this.activatedRoute.snapshot.params['carId'];
    this.vihecleService.getCarById(carId).subscribe((car: Car | undefined) => {
      this.car = car;
    });
  }

  submitForm() {
    if (this.car) {
      const carId = this.activatedRoute.snapshot.params['carId'];
      this.vihecleService.updateCar(carId, this.car);
      alert('Car updated successfully!');
      this.router.navigate(['/my-vihecles'])
    }
  }
}
