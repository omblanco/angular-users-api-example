import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class MongoUserService extends CommonService<User> {

  protected baseEndpoint = 'http://localhost:8081/api/v3/users';

  constructor(http: HttpClient) {
    super(http);
   }
}
