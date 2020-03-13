import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { EmployeeComponent } from './employee/employee.component';

import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

import { MessagesComponent } from './messages/messages.component';

import { AppRoutingModule } from './app-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClientModule } from "@angular/common/http";

import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";

import { InMemoryDataService } from "./in-memory-data.service";
import { EmployeeSearchComponent } from './employee-search/employee-search.component';

@NgModule({

  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpClientModule, HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{dataEncapsulation:false}) ],

  declarations: [ AppComponent, EmployeeComponent, EmployeeDetailComponent, MessagesComponent, DashboardComponent, EmployeeSearchComponent ],
  
  bootstrap:    [ AppComponent ],
  
  providers: [InMemoryDataService],
  
})

export class AppModule { }