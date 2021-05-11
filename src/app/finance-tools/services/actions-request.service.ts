import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActionsRequestService {
  //url:string = 'http://192.168.0.119:8080/actions/';
  //
  url:string = 'https://financial-app-backend-javier.herokuapp.com/actions';

  constructor(private http: HttpClient) { }

  //getAction():Observable<any> {
    //let params = 'actions=\'PINS:NYSE, XLE:NYSEARCA\'';
    //let headers = new HttpHeaders({
      //'Content-Type': 'application/x-www-form-urlencoded',
      //'Authorization': '' });
  //let options = { headers: headers };
    //let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
    //return this.http.post(this.url, params, options);
  //}
  getAction():Observable<any> {
    return this.http.get(this.url);
  }


  getActionValues(params: any):Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': ''
    });
    let options = {headers: headers};
    return this.http.post(this.url, params, options);

  }

}
