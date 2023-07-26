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
  ) {}


  isLoggedIn(){
    return this.userService.isLoggedIn()
  }


  submitForm(): void {
    //create car in Firestore with the form-data
    this.vihecleService.addCar(this.car);
   

 
  }
}
