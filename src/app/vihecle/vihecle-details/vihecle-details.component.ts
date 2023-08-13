import { Component, OnDestroy, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { VihecleService } from '../vihecle.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-vihecle-details',
  templateUrl: './vihecle-details.component.html',
  styleUrls: ['./vihecle-details.component.css']
})
export class VihecleDetailsComponent implements OnDestroy,OnInit {
  user = ''
  currentCar: Car | any;
  private carSubscription: Subscription | undefined;

  constructor(private vihecleService: VihecleService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.getCar();

    
  }

  // *looses state when page is being refreshed*
  // isLogged() {
  //   return this.userService.isLoggedIn();
  // }

  isLogged() {
    const token = localStorage.getItem('token');
    if (token !== null) {
      this.user = JSON.parse(token);
    } else {
      this.user = '';
    }
    return this.user
  } 

  delete() {
    const carId = this.activatedRoute.snapshot.params['carId'];
    this.vihecleService.deleteCar(carId);
  }

  getCar() {
    const carId = this.activatedRoute.snapshot.params['carId'];
    this.carSubscription = this.vihecleService.getCarById(carId).subscribe(result => {
      this.currentCar = result;
    });
  }

  ngOnDestroy() {
    if (this.carSubscription) {
      this.carSubscription.unsubscribe();
    }
  }
}
