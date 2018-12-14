import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list.component';
import { EmployeeService } from './shared/employee-service';
import { CreateEmployeeComponent } from './create-employee.component'
import { JQ_TOKEN } from './shared/jQuery-service'
import { routes } from './routes';
import { SimpleModalComponent } from './shared/simple-modal.component'
import { ModalTriggerDirective } from './shared/modal-trigger.directive'
import { EmployeeWrapperComponent } from './employee-wrapper.component'
import { GenderPipe } from './shared/gender.pipe'
declare let jQuery: Object
@NgModule({
    imports: [BrowserModule, HttpModule, RouterModule.forRoot(routes),FormsModule,ReactiveFormsModule,],
    declarations: [AppComponent, EmployeeListComponent, CreateEmployeeComponent, SimpleModalComponent, ModalTriggerDirective, EmployeeWrapperComponent, GenderPipe  ],
    providers: [EmployeeService, { provide: JQ_TOKEN, useValue: jQuery }, CreateEmployeeComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
