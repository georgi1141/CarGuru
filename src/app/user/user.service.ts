import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';




@Injectable({
  providedIn: 'root',
})
export class UserService {

  get isLogged() {
    return localStorage.getItem('token')
  }

 


  constructor(private fireauth: AngularFireAuth, private router: Router) {}

  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(
      (res) => {
        localStorage.setItem('token','true');
        this.router.navigate(['/home']);
      },
      (err) => alert(err.message)
    );
    this.router.navigate(['/login']);
  }


  register(email:string,password:string){


    this.fireauth.createUserWithEmailAndPassword(email,password).then(
      ()=>{
        alert('Successful registration!')
      this.router.navigate(['/login']);

    },err=>{
      alert(err.messagae)
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
