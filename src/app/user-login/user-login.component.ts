import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  email: string = '';
  password: string = '';

  constructor(private userService: UserService,private router:Router) { }

  
  m:any;
  onSubmit() {
    this.userService.login(this.email, this.password).subscribe(
     (response:string) => { 
      this.m=response;
        // this.userService.uId=this.m; //assign the userId here
        // Store the user ID in session storage
        sessionStorage.setItem('uId', this.m);
        this.router.navigate(['/userProducts'])
      },
      (error) => {
        // console.error('Login failed', error);
        alert("invalid credentials");
       
      }
    );
  }
}
