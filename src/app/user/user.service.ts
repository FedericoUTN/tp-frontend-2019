import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlUsers = 'https://api.github.com/users';
  constructor(private http: HttpClient) { }
  getUsers(): any{
    return this.http.get(this.urlUsers);
    
    }
  getById(login: string): any{
    return this.http.get(this.urlUsers + '/' + login)
  }
}
