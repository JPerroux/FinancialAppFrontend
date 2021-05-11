import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionsRequestService } from '../finance-tools/services/actions-request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public actions:any;
  public isLogged:string;

  constructor(private _actionService: ActionsRequestService, private router: Router) {
    this.isLogged = 'false';
   }

  ngOnInit(): void {
    this.getAction();
  }

  getAction(){
    this._actionService.getAction().subscribe(data => {
      this.actions = data; 
    });
  }
}
