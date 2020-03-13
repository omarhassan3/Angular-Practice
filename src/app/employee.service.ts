import { Injectable } from '@angular/core';

import { Employee } from './employee';

import { EMPLOYEES } from './mock-employees';

import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map, tap} from 'rxjs/operators';

@Injectable({

  providedIn: 'root',

})

export class EmployeeService {

private employeesUrl = 'api/employees';

constructor(private messageService: MessageService, private http:HttpClient) 
{ 

}

getEmployees(): Observable<Employee[]>{

return this.http.get<Employee[]>(this.employeesUrl).pipe(tap(_=> this.log('fetched employees')),catchError(this.handleError<Employee[]>('getEmployees', [])));

}

getEmployee(id: number): Observable<Employee> {

  const url = `${this.employeesUrl}/${id}`;

  return this.http.get<Employee>(url).pipe(tap(_ => this.log(`fetched employee id = ${id}`)),catchError(this.handleError<Employee>(`getEmployee id =${id}`)));
}

private log(message:string){
  this.messageService.add(`EmployeeService: ${message}`);
}

/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

updateEmployee (employee: Employee): Observable<any> {
  return this.http.put(this.employeesUrl, employee, this.httpOptions).pipe(
    tap(_ => this.log(`updated employee id=${employee.id}`)),
    catchError(this.handleError<any>('updateEmployee'))
  );
}

httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json'})
};

addEmployee (employee: Employee): Observable<Employee> {
  return this.http.post<Employee>(this.employeesUrl, employee, this.httpOptions).pipe(
    tap((newEmployee: Employee) => this.log(`added employee w/ id=${newEmployee.id}`)),
    catchError(this.handleError<Employee>('addEmployee'))
  );
}

 deleteEmployee (employee: Employee | number): Observable<Employee> {
  const id = typeof employee === 'number' ? employee : employee.id;
  const url = `${this.employeesUrl}/${id}`;

  return this.http.delete<Employee>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted eployee id=${id}`)),
    catchError(this.handleError<Employee>('deleteEmployee'))
  );
}

searchEmployees(term: string): Observable<Employee[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<Employee[]>(`${this.employeesUrl}/?name=${term}`).pipe(
    tap(x => x.length ?
       this.log(`found employees matching "${term}"`) :
       this.log(`no employees matching "${term}"`)),
    catchError(this.handleError<Employee[]>('searchEmployees', []))
  );
}

}
