import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getHello()  {
    return this.http.get(environment.apiUrl + "user/7134ca44-3f2e-454f-b0fe-f6bd47f2cc69"); 
  }
}
