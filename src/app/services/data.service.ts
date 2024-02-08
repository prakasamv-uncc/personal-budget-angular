import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataUrl:string = 'http://localhost:3000/budget';

  constructor(private http: HttpClient) {
  }

  getBudget() : Observable<any> {
    return this.http.get(this.dataUrl);
  }
}
