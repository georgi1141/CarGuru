import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  email:string = ''
  password:string = ''

  constructor(private userService:UserService){}

   validateEmail = (email:string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };


  register(){


    if(!this.validateEmail(this.email)){
        alert('Please input a correct email address!')
        return
    }

    if(this.email == ''){
      alert('Email is required!')
      return
    }
    if(this.password == ''){
      alert('Password is required!')
      return
    }
    if(this.password.length<6){
      alert('Password must be at least 6 characters long!')
      return
    }

    this.userService.register(this.email,this.password)

    this.email = ''
    this.password = ''


  }





}
