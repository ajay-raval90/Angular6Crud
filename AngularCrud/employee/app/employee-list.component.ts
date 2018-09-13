import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { EmployeeService } from './shared/employee-service'
@Component({
    selector: 'employee-list',
    templateUrl:'/employee/app/employee-list.component.html'
})
export class EmployeeListComponent implements OnInit
{
    Employees: any = [];
    IsemployeeLoaded: boolean =  false;
    constructor(private empService: EmployeeService, private router:Router) {
    }
    ngOnInit() {
        this.loademployees();
    }
    loademployees() {
        this.empService.getAllEmployees().subscribe((employees) => {
            this.Employees = employees;
            this.IsemployeeLoaded = true;
        });
    }

    addEmployee() {
        this.router.navigate(['/new']);
    }
    
    deleteEmployee(emp: any) {
        this.empService.deleteEmployee(emp).subscribe(() => {
            this.loademployees();
            alert("Employee Deleted Successfully");
        });
    }
}