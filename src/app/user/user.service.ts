import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private fireauth: AngularFireAuth, private router: Router) {}

  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(
      () => {
        localStorage.setItem('token', 'true');
        this.router.navigate(['/home']);
      },
      (err) => alert('Error,something went wrong!')
    );
    this.router.navigate(['/login']);
  }


  register(email:string,password:string){

    this.fireauth.createUserWithEmailAndPassword(email,password).then(
      ()=>{
        alert('Successful registration!')
      this.router.navigate(['/login']);

    },err=>{
      alert('Error,something went wrong! Please try again!')
      this.router.navigate(['/register']);
    })

  }

  logout(){
    this.fireauth.signOut().then(()=>{
      localStorage.removeItem('token')
      this.router.navigate(['/login'])
    },err=>{
      alert(err.message)
    })
  }


}
