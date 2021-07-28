import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from './User';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  isNow: Boolean = false;
  name = '';
  peopleList: Array<User> = [];
  peopleListAct: Array<User> = [];
  formSearch: FormGroup;
  constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder) { 
    this.formSearch = this.formBuilder.group({
      name: ['']
    });
    
  }

  ngOnInit(): void {
   this.actualizarUsers();
  }
  actualizarUsers(): void{
    this.userService.getUsers().subscribe((response: any[]) => {
      this.peopleList = response;
      }
      )
  }
  getUserDetail(login: string){
    this.router.navigate(['user/' + login])
  }

  getEditUser(login: string){
    this.router.navigate(['user/' + login])
    this.userService.isEdit = true;
  }
  search(): void{
    this.peopleListAct = this.peopleList.filter(word => word.login.includes(this.name));
    this.peopleList = this.peopleListAct;
    
  }
  update(): void{
    this.actualizarUsers();
  }


}
