import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class MysqlUserService extends CommonService<User> {
  
  protected baseEndpoint = 'http://localhost:8080/api/v3/users';

  constructor(http: HttpClient) {
    super(http);
  }  
}
