import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { EmployeeComponent } from './employee/employee.component';

import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

import { MessagesComponent } from './messages/messages.component';

import { AppRoutingModule } from './app-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({

  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],

  declarations: [ AppComponent, EmployeeComponent, EmployeeDetailComponent, MessagesComponent, DashboardComponent ],
  
  bootstrap:    [ AppComponent ],
  
})

export class AppModule { }