import { Injectable } from '@angular/core';
import { Subject, ReplaySubject } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import{Users} from'./Users';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  subject$ = new ReplaySubject(1);

  constructor(private http : HttpClient) { }

  url : string = "http://localhost:3000/Users/"

  setData(data) {
    this.subject$.next(data)
  }
  getData(){
    return this.subject$.asObservable();
  }
  getUsers()
{
    return this.http.get<Users[]>(this.url);
}
}
