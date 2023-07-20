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

  logout(){
    this.userServive.logout()
    this.router.navigate(['/home'])
  }

  }

  


