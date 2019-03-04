// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'Login';
  data = {username:"",password:""};
  constructor(
    private router: Router) {
  }

  onLogin(){
  	if(this.data.username == this.data.password) {
      // alert('username / password is correct.');
      this.router.navigate(['/dashboard']);
  	}else{
  		alert(' login does not work');
  	}
  }
  onAboutus(): void{
    this.router.navigate(['/aboutus']);
  }
}
