import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { MongoUserService } from 'src/app/services/mongo-user.service';

@Component({
  selector: 'app-mongo-users',
  templateUrl: './mongo-users.component.html',
  styleUrls: ['./mongo-users.component.css']
})
export class MongoUsersComponent implements OnInit {

  titulo: string = 'Listado de usuarios de MongoDB';
  users: User[];

  constructor(private service: MongoUserService) { }

  ngOnInit(): void {
    this.service.list().subscribe(users => this.users = users);
  }

}
