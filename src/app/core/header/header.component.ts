import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private userServive:UserService,private router:Router){
    
  }

  isLoggedIn(){
    console.log(this.userServive.isLogged)
    return this.userServive.isLogged
    
  }

  logout(){
    this.userServive.logout()
    this.router.navigate(['/home'])
    alert(`You've successfully logged out!Thank you for using our platform!`)
    
  }

  }

  


