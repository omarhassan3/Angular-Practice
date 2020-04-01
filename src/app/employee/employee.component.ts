import { Component, OnInit } from '@angular/core';

import { Employee } from '../employee';

import { EmployeeService} from '../employee.service';

 
@Component({
  
  selector: 'app-employee',
  
  templateUrl: './employee.component.html',
  
  styleUrls: ['./employee.component.css']

  
})
export class EmployeeComponent implements OnInit {
    
  employees: Employee[];
  
  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {

    this.getEmployees();
  
  }

  getEmployees(): void{

    this.employeeService.getEmployees().subscribe(employees => this.employees = employees);

  }

 add(name: string): void {
  name = name.trim();
  if (!name) { return; }
  this.employeeService.addEmployee({ name } as Employee)
    .subscribe(employee => {
      this.employees.push(employee);
    });
}

delete (employee: Employee): void{

  this.employees = this.employees.filter(e => e !== employee);
  this.employeeService.deleteEmployee(employee).subscribe();
}
  

}