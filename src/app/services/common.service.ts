import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Generic } from '../models/generic';

export abstract class CommonService<E extends Generic> {

  protected baseEndpoint: string;

  protected headers : HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(protected http: HttpClient) { }

  public list(): Observable<E[]> {
    return this.http.get<E[]>(this.baseEndpoint);
  }
  
  public  findPaged(page: string, size: string): Observable<any> {

    const params = new HttpParams()
    .set('page', page)
    .set('size', size);

    return this.http.get<any>(this.baseEndpoint, {params: params});
  }

  public detail (id: string): Observable<E> {
    return this.http.get<E>(`${this.baseEndpoint}/${id}`);
  }

  public create(e: E): Observable<E> {
    return this.http.post<E>(this.baseEndpoint, e, {headers: this.headers});
  }

  public update(e: E): Observable<E> {
    return this.http.put<E>(`${this.baseEndpoint}/${e.id}`, e, {headers: this.headers});
  } 

  public delete (id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseEndpoint}/${id}`);
  }
 }
