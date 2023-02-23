import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getHello()  {
    return this.http.get(environment.apiUrl + "user/6a95ad68-16e7-4367-b5c2-feb99eaa7217"); 
  }
}
