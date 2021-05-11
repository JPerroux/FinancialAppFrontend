import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ComunicationService } from 'src/app/finance-tools/services/comunication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [AuthService]
})
export class NavbarComponent implements OnInit {
  public user$: Observable<any>;
  public cotization:any;

  constructor(
    private authSvc: AuthService,
     private router: Router,
     private _comunicationService: ComunicationService
     ) { 
    this.user$ = this.authSvc.afAuth.user;
  }

  ngOnInit(){
  }

  async onLogout() {
    try {
      await this.authSvc.logout();
      sessionStorage.setItem('user', '');
      this._comunicationService.sendMessage(''); 
      this.router.navigate(['/login']);  
    } catch (error) {
      console.log(error);
    }
    
  }

}
