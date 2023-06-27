import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl: string = 'http://localhost:3000/todos';
  header = new HttpHeaders().set('content-Type','application/json');

  constructor(private httpClient: HttpClient) { }
 
  // Create --  post 
  create(data: any): Observable<any> {
    let API_URL = `${this.apiUrl}`;
    return this.httpClient.post(API_URL, data)
  }

  // Read -- get
  list(){
    return this.httpClient.get(`$(this.apiUrl)`);
  }
}
