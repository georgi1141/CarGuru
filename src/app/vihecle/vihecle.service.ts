import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Car } from '../models/car';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VihecleService {
  private dbPath = '/cars';
  private carsRef: AngularFireList<Car>;

  constructor(private db: AngularFireDatabase, private router: Router, private userService: UserService) {
    this.carsRef = db.list<Car>(this.dbPath);
  }

  getAllCars(): Observable<Car[]> {
    return this.carsRef.valueChanges();
  }

  getCarById(carId: string): Observable<Car | undefined> {
    return this.carsRef.snapshotChanges().pipe(
      map(changes => {
        const car = changes
          .filter(change => change.payload.exists() && change.payload.key === carId)
          .map(change => ({ key: change.payload.key, ...change.payload.val() }))[0] as Car;
        return car;
      })
    );
  }

  getCarsByOwner(): Observable<Car[]> {
    const uid = this.userService.getUserId();
    return this.getAllCars().pipe(
      map((allCars: Car[]) => allCars.filter(car => car.owner_id === uid))
    );
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
        this.router.navigate(['/shop']);
      })
      .catch(error => console.error('Error deleting car:', error));
  }
}
