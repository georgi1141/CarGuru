import { Component,OnInit } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private userService: UserService){}
user =''
  ngOnInit(): void {
    this.isLogged()
  }


 isLogged() {
    const token = localStorage.getItem('token');
    if (token !== null) {
      this.user = JSON.parse(token);
    } else {
      this.user = '';
    }
    return this.user
  } 
  // * looses state when page is being restarted*
  
  // isLogged(){
  //   return this.userService.isLoggedIn()
  // }

}
