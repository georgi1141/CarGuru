import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/user/user.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

user:User | any;
userName :string = ''

  constructor(private userServive:UserService,private router:Router){
    
  }

  


  isLoggedIn() {
    const token = localStorage.getItem('token');
    if (token !== null) {
      this.user = JSON.parse(token);
      this.userName = this.user.email.split('@')[0]+'!'
    } else {
      this.user = null;
    }
    return this.user
  } 


  logout(){
    this.userServive.logout()
    this.router.navigate(['/home'])
    alert(`You've successfully logged out!Thank you for using our platform!`)
    
  }

  }

  


