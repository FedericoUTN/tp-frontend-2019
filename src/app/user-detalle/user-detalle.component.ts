import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user/User';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-user-detalle',
  templateUrl: './user-detalle.component.html',
  styleUrls: ['./user-detalle.component.css']
})
export class UserDetalleComponent implements OnInit {
user: User = {login: '', avatar_url: '', id: 0, node_id: '', gravatar_id: '', name: '', location: '', html_url: ''};
login = '';
isEdit: boolean = false;
formUser: FormGroup;
  constructor(private route: ActivatedRoute, private userService: UserService, private formBuilder: FormBuilder) {
    this.formUser = this.formBuilder.group({
      nombre: [''],
      localidad: [''],
      git: ['']
    })
   }

  ngOnInit(): void {
    this.route.params.subscribe( params => this.login = params.login);
    this.userService.getById(this.login).subscribe( (data: User) => this.user = data)
  }
  editOn(): void{
    this.isEdit = !this.isEdit;
  }
  save(): void{
    
  }
  

}
