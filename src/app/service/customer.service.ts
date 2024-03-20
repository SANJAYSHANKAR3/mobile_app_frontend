import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../../model/registration';
import { LoginCustomer } from '../../model/LoginCustomer';
@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  constructor(
    private httpClient:HttpClient
  ) { }

  public createCustomer(newCustomer:Customer):Observable<any>{
    return this.httpClient.post(
      "http://localhost:8091/createCustomer",newCustomer);
  }
 public login(loginCustomer:LoginCustomer):Observable<any>
 {
  return this.httpClient.post('http://localhost:8091/login/customer',loginCustomer)
 }
}
