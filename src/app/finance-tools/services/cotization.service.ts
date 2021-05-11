import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CotizationService {
  //url:string = 'http://192.168.0.119:8080/cotization';

  url:string = 'https://financial-app-backend-javier.herokuapp.com/cotization';
  constructor(private http: HttpClient) { }

  getCotization():Observable<any> {
    return this.http.get(this.url);
  }
}
