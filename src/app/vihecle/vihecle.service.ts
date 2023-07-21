import { Injectable } from '@angular/core';
import { getDatabase, ref, set ,onValue} from "firebase/database";
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class VihecleService {

  constructor() { }

  addCar(car:Car){

    const db = getDatabase()

   return set(ref(db,'/cars' + car.id ),{car})

    // car.id = this.angularFirestore.createId()
    // return this.angularFirestore.collection('/cars').add(car)

  }

  getAllCars(){

    const db = getDatabase()

    return 



  //   return this.angularFirestore.collection('/cars').snapshotChanges()
  }

  // deleteCar(car:Car){

  //   return this.angularFirestore.doc('/cars'+car.id).delete()

  // }

  // updateCar(car:Car){
  //   this.deleteCar(car)
  //   this.addCar(car)
  // }


}
