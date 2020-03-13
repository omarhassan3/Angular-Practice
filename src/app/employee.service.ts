import { Injectable } from '@angular/core';

import { Employee } from './employee';

import { EMPLOYEES } from './mock-employees';

import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';

@Injectable({

  providedIn: 'root',

})

export class EmployeeService {

constructor(private messageService: MessageService) { }

getEmployees(): Observable<Employee[]>{
// TODO: send the message after fetching the employees
  this.messageService.add('EmployeeService: fetched employees');

  return of (EMPLOYEES);

}

getEmployee(id: number): Observable<Employee> {

  this.messageService.add(`EmployeeService: fetched hero id =${id}`)

  return of (EMPLOYEES.find(employee => employee.id === id ));
}

}
