import { Component ,} from '@angular/core';
import { VihecleService } from '../vihecle.service';
import { Car } from 'src/app/models/car';



@Component({
  selector: 'app-sell-vihecle',
  templateUrl: './sell-vihecle.component.html',
  styleUrls: ['./sell-vihecle.component.css']
})


export class SellVihecleComponent {

  
    id=''
    make=''
    model=''
    year=''
    kilometers=''
    engine_type=''
    engine_power=''
    gearbox_type=''
    image_url=''
    info=''
    owner_name=''
    owner_telephone=''
    owner_id=''
  
  constructor(private vihecleService:VihecleService){}

  submitForm():void{
    alert(this.make)

    this.id=''
    this.make=''
    this.model=''
    this.year=''
    this.kilometers=''
    this.engine_type=''
    this.engine_power=''
    this.gearbox_type=''
    this.image_url=''
    this.info=''
    this.owner_name=''
    this.owner_telephone=''
    
  }


}