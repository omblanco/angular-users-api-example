import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { MysqlUserService } from 'src/app/services/mysql-user.service';

@Component({
  selector: 'app-mysql-users',
  templateUrl: './mysql-users.component.html',
  styleUrls: ['./mysql-users.component.css']
})
export class MysqlUsersComponent implements OnInit {

  titulo: string = 'Listado de usuarios de MySQL';
  users: User[];

  constructor(private service: MysqlUserService) { }

  ngOnInit(): void {
    this.service.list().subscribe(users => this.users = users);
  }

}
