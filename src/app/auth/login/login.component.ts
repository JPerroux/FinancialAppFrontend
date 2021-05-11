import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ComunicationService } from 'src/app/finance-tools/services/comunication.service';

import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    private authSvc:AuthService, 
    private router: Router,
    private _comunicationService: ComunicationService
    ) { }

  ngOnInit(): void {
  }

  async onLogin(){
    const {email, password} = this.loginForm.value;
    try {
      const user = await this.authSvc.login(email, password);  
      if (user) {
        sessionStorage.setItem('user', user.user.email);
        this._comunicationService.sendMessage(user.user.email); 
        this.router.navigate(['/actions']);
      }
    } catch (error) {
      console.log(error);
    }
    
  }

}
