import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin,observable } from 'rxjs'
// import { Obsrvalble } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';

import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  slectedEmployee: Employee;
  employees: Employee[];
  readonly baseURL = 'http://localhost:4210/employees';

  constructor(private http : HttpClient) { }

  postEmployee(emp: Employee) {
  return this.http.post( this.baseURL, emp);
  }
}
