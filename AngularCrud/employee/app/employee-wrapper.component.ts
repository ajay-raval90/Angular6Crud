import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee.component'
@Component({
    selector: 'employee-wrapper',
    templateUrl: `/employee/app/employee-wrapper.component.html`,
})
export class EmployeeWrapperComponent {
    constructor(private router: Router, private compo: CreateEmployeeComponent) {
    }
    back() {
        this.compo.backToList();
    }
}
