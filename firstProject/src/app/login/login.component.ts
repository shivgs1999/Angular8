import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private router: Router , private dataServise: DataService,private httpClient: HttpClient,private authService: AuthService) {

    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }
  ngOnInit() {
    
  }

  onSubmit() {
    if(this.loginForm.valid) {
      console.log(this.v());
    }
  }
  v() {
    return this.loginForm.value;
  }

  createData(email,pass){
    let data = {
      userName: email,
      Password: pass
    }
    this.dataServise.create(data).subscribe(res => {
      console.log('data Create', res);
      
    })
  } 
    checkUser(username,password){
    var output = this.authService.checkUserNamePassword(username,password);
     console.log('Output', output);
     if (output) {
      this.router.navigate(['products']);
     } else {
      alert('Invalid Username or Password')
     }
    }
}
