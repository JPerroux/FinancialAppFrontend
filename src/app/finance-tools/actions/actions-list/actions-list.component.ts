import { Component, OnInit } from '@angular/core';
import { ActionsRequestService } from '../../services/actions-request.service';
import { ComunicationService } from '../../services/comunication.service';

@Component({
  selector: 'app-actions-list',
  templateUrl: './actions-list.component.html',
  styleUrls: ['./actions-list.component.scss']
})
export class ActionsListComponent implements OnInit {
  public actions:any;
  private cotization:string;

  constructor(
    private _actionService: ActionsRequestService,
    private _comunicationService: ComunicationService
  ) { }

  ngOnInit(): void {
    this.getAction();
    this._comunicationService.sendMessageObservable.subscribe(message => {
      this.cotization = message;
    })
  }

  getAction(){
    this._actionService.getAction().subscribe(data => {
      this.actions = data; 
    });
  }
}
