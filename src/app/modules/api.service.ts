import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }

  addAvailability(data):Observable<any>{
    return this.http.post<any>(`${environment.backend_server_url}/addAvailability`,data);
  }

  getAvailability(userId):Observable<any>{
    return this.http.get<any>(`${environment.backend_server_url}/getAvailability?userId=${userId}`);
  }

  getUser():Observable<any>{
    return this.http.get<any>(`${environment.backend_server_url}/getUser`);
  }
}
