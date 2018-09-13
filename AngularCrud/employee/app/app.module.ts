import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list.component';
import { EmployeeService } from './shared/employee-service';
import { CreateEmployeeComponent } from './create-employee.component'
import { routes } from './routes';
@NgModule({
    imports: [BrowserModule, HttpModule, RouterModule.forRoot(routes),FormsModule,ReactiveFormsModule],
    declarations: [AppComponent, EmployeeListComponent, CreateEmployeeComponent],
    providers: [EmployeeService],
    bootstrap: [AppComponent]
})
export class AppModule { }
