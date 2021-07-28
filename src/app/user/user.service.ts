import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { User } from './User';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlUsers = 'https://api.github.com/users';
  isEdit = false;
  constructor(private http: HttpClient) { }
  getUsers(): any{
    return this.http.get(this.urlUsers);
    
    }
  getById(login: string): any{
    return this.http.get(this.urlUsers + '/' + login)
  }
  editById(user: User): any{
    return this.http.put<User>(this.urlUsers + '/' + user.login, user)
  }
}
