import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './User';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  peopleList: Array<User> = [];
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((response: any[]) => {
    this.peopleList = response;
    console.log(this.peopleList);
    console.log();
    }
    )
  }
  getUserDetail(login: string){
    this.router.navigate(['user/' + login])
  }

}
