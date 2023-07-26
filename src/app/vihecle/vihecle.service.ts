import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Car } from '../models/car';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class VihecleService {
  private dbPath = '/cars';
  private carsRef: AngularFireList<Car>;

  constructor(private db: AngularFireDatabase,private router: Router) {
    this.carsRef = db.list<Car>(this.dbPath);
  }

  addCar(car: Car) {
    this.carsRef.push(car)
      .then(() =>{
        alert('Car added successfully!')
        this.router.navigate(['/shop'])
      
      } )
      .catch(error => console.error('Error adding car:', error));
  }
}