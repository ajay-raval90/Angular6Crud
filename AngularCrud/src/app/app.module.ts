import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list.component';
import { EmployeeService } from './shared/employee-service';
@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [AppComponent, EmployeeListComponent],
    providers: [EmployeeService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
