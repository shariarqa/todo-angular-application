import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HardcodedAuthenticationService} from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  username = 'rana';
  password = '';
  errorMessage='Invalid Credentials';
  invalidLogin=false;

  constructor(private router: Router, private hardcoded : HardcodedAuthenticationService ) {


  }

  ngOnInit() {
  }


  // handleLogin() {
  //
  //   if(this.HardcodedAuthenticationService.authenticate(this.username, this this.password)){
  //
  //     this.invalidLogin=false;
  //   }else {
  //     this.invalidLogin=true;
  //   }
  //
  //
  //  // console.log(this.username);
  //  // console.log(this.password);
  // }

  handleLogin1() {

    if(this.hardcoded.authenticate(this.username, this.password)) {


      this.router.navigate(['welcome', this.username])
      this.invalidLogin=false;
      console.log("correct")
    } else {
      this.invalidLogin=true;
      console.log(this.errorMessage);
    }
  }

}
