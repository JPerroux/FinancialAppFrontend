import { Component, OnInit } from '@angular/core';
import { ActionsRequestService } from 'src/app/finance-tools/services/actions-request.service';
import { ComunicationService } from 'src/app/finance-tools/services/comunication.service';
import { CotizationService } from 'src/app/finance-tools/services/cotization.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  status: boolean;
  isLogged: boolean;
  title = 'financial-app';
  public cotization:any;
  public actions:any;

  constructor
  (
    private _actionService: ActionsRequestService,
    private _cotizationService: CotizationService,
    private _comunicationService: ComunicationService
  ) { 
    this.status = false;
    this.isLogged = false;
    if (sessionStorage.getItem('user')){
      this.isLogged = true;
    }
    
    this._comunicationService.sendMessageObservable.subscribe(message => {
      if (message) {
        this.isLogged = true;
      }
      else {
        this.isLogged = false;
      }   
  })
  }

  ngOnInit(): void {
    
    this.getCotization();
    this.getAction();
  }

  clickEvent(){
    this.status = !this.status;
  }

  getCotization(){
    this._cotizationService.getCotization().subscribe(data => {
      this.cotization = data;
      //this._comunicationService.sendMessage(this.cotization.dolar); 
    });
  }

  getAction(){
    this._actionService.getAction().subscribe(data => {
      this.actions = data; 
    });
  }

}
