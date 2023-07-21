import { Component } from '@angular/core';
import { VihecleService } from '../vihecle.service';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-sell-vihecle',
  templateUrl: './sell-vihecle.component.html',
  styleUrls: ['./sell-vihecle.component.css']
})



export class SellVihecleComponent {

  car:Car ={
    id:'123',
    make:'VW'
  }


  constructor(private vihecleService:VihecleService){}

  create(){

this.vihecleService.addCar(this.car)

  }




}
