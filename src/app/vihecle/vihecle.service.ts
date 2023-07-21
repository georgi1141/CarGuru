import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore' 
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class VihecleService {

  constructor(private angularFirestore:AngularFirestore) { }

  addCar(car:Car){
    car.id = this.angularFirestore.createId()
    return this.angularFirestore.collection('/cars').add(car)

  }

  getAllCars(){
    return this.angularFirestore.collection('/cars').snapshotChanges()
  }

  deleteCar(car:Car){

    return this.angularFirestore.doc('/cars'+car.id).delete()

  }

  updateCar(car:Car){
    this.deleteCar(car)
    this.addCar(car)
  }


}
