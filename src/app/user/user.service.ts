import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {


  user:User | any

  constructor(private fireauth: AngularFireAuth, private router: Router) {}


  login(email: string, password: string) {

    this.fireauth.signInWithEmailAndPassword(email, password).then(
      (currentUser) => {
        this.user = {
          email:currentUser.user?.email,
          uid:currentUser.user?.uid
        }
        localStorage.setItem('token', JSON.stringify(this.user));
        this.router.navigate(['/home']);
      },
      (err) => alert(err.message)
    );
    this.router.navigate(['/login']);
  }

  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(
      (user) => {
        alert('Successful registration!');
        this.router.navigate(['/login']);
      },
      (err) => {
        alert(err.messagae);
        this.router.navigate(['/register']);
      }
    );
  }

  logout() {
    this.fireauth.signOut().then(
      () => {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      },
      (err) => {
        alert(err.message);
      }
    );
  }
}







