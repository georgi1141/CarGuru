import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Car } from '../models/car';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class VihecleService {
  private dbPath = '/cars';
  private carsRef: AngularFireList<Car>;

  constructor(private db: AngularFireDatabase,private router: Router,private userService:UserService) {
    this.carsRef = db.list<Car>(this.dbPath);
  }

  getAllCars() {
    return this.carsRef.valueChanges();
  }

  getCarById(carId: string) {
    return this.carsRef.snapshotChanges().pipe(
      map(changes => {
        return changes
          .filter(change => change.payload.exists() && change.payload.key === carId)
          .map(change => ({ key: change.payload.key, ...change.payload.val() }));
      })
    );
  }

  getCarsByOwner() {
    const uid = this.userService.getUserId();

    if (!uid) {
      return []; // Return an empty array if uid is null
    }

    const cars: Car[] = [];
    this.getAllCars().subscribe(
      (allCars: Car[]) => {
        cars.push(...allCars.filter(car => car.owner_id === uid));
      }
    );

    return cars;
  }


  addCar(car: Car) {
    this.carsRef
      .push(car)
      .then((carRef) => {
        const carId = carRef.key; 
        if (carId) {
          car.id = carId;
          this.carsRef.update(carId, car).then(() => {
            alert('Car added successfully!');
            this.router.navigate(['/shop']);
          }).catch(error => {
            console.error('Error adding car:', error);
            this.router.navigate(['/sell-my-car']);
          });
        }
      })
      .catch(error => {
        console.error('Error adding car:', error);
        this.router.navigate(['/sell-my-car']);
      });
  }

  updateCar(key: string, car: Car) {
    this.carsRef.update(key, car)
      .then(() => console.log('Car updated successfully!'))
      .catch(error => console.error('Error updating car:', error));
  }

  deleteCar(key: string) {
    this.carsRef.remove(key)
      .then(() => {
        console.log('Car deleted successfully!')
      this.router.navigate(['/shop'])
        
      })
      .catch(error => console.error('Error deleting car:', error));
  }


}