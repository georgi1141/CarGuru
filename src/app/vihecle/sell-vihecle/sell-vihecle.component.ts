import { Component } from '@angular/core';
import { VihecleService } from '../vihecle.service';
import { Car } from 'src/app/models/car';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-sell-vihecle',
  templateUrl: './sell-vihecle.component.html',
  styleUrls: ['./sell-vihecle.component.css'],
})
export class SellVihecleComponent {

  user = '';

  car: Car | any = {
    price: '',
    make: '',
    model: '',
    year: '',
    kilometers: '',
    engine_type: '',
    engine_power: '',
    gearbox_type: '',
    image_url: '',
    info: '',
    owner_name: '',
    owner_telephone: '',
    owner_id: this.userService.getUserId(),
  };

  constructor(
    private vihecleService: VihecleService,
    private userService: UserService
  ) {
    
  }

  isLoggedIn() {
    const token = localStorage.getItem('token');
    if (token !== null) {
      this.user = JSON.parse(token);
    } else {
      this.user = '';
    }
    return this.user
  } 





  submitForm(carForm: any): void {
    if (carForm.invalid) {
      // If the form is invalid, display warnings for each required field
      Object.keys(carForm.controls).forEach(control => {
        carForm.controls[control].markAsTouched();
      });
      return;
    }

    // Create car in Firestore with the form-data
    this.vihecleService.addCar(this.car);
  }
}
