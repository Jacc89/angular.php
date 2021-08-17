import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable } from 'rxjs';
import { User } from "../models/user";
@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlApi: string= 'http://localhost/empleados/';  //api crud php

  constructor( private http:HttpClient) { }

  addUser(dateUser:User){
    return this.http.post(this.urlApi + "?insert=1", dateUser);
  }

  consultUsers(){
    return this.http.get(this.urlApi);
  }

  DeleteUser(id:any){
    return this.http.get(this.urlApi + "?borrar=" + id);
  }

  consultUser(id:any){

    return this.http.get(this.urlApi + "?consultar=" + id);
  }

  editUser(dateUser:User, id:any){

    return this.http.post(this.urlApi + "?actualizar=" + id, dateUser);
  }
}
