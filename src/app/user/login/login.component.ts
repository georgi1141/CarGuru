import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private userService: UserService) {}

  login() {

    
    if (this.email == '') {
      alert('Email is required!');
      return;
    }

    if (this.password == '') {
      alert('Password is required!');
      return;
    }


    this.userService.login(this.email,this.password)
    this.email = ''
    this.password = ''

  }
}
