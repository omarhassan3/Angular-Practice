import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Employee } from './employee';

@Injectable({
  providedIn:'root',
})


export class InMemoryDataService {
  createDb(){

    const employees = [
    { id: 1, name: 'Keelan Cousins' },
    { id: 2, name: 'Faheem Swan' },
    { id: 3, name: 'Joni Hodson' },
    { id: 4, name: 'Karlson Kline' },
    { id: 5, name: 'Eliott Buck' },
    { id: 6, name: 'Lloyd Dotson' },
    { id: 7, name: 'Lily-Ann Henson' },
    { id: 8, name: 'Shreya Valenzuela' },
    { id: 9, name: 'Kymani Goldsmith' },
    { id: 10, name: 'Sienna-Rose Newton' }
    ];
    
    return {employees};

  }
  constructor() { }

  genId(employees:Employee[]): number{
    return employees.length > 0 ? Math.max(...employees.map(employee=>employee.id))+1 : 11 ; 
  }

}