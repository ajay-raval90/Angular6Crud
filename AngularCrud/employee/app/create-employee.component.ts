import { Component, OnInit} from '@angular/core'
import { Router } from '@angular/router'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { EmployeeService } from './shared/employee-service'
@Component({
    templateUrl: `/employee/app/create-employee.component.html`,
    styles: [
        `em {color:#E05C65; padding-left:10px}
    .error input {background-color:#E3C3C5}
    .error ::-webkit-input-placeholder {color:#999}
    .error ::-moz-placeholder {color:#999}
    .error :-moz-placeholder {color:#999}
    .error :ms-input-placeholder {color:#999}
     `
    ]
})
export class CreateEmployeeComponent implements OnInit {

    newEmployeeForm: FormGroup;
    FirstName: FormControl;
    LastName: FormControl;
    Email: FormControl;
    Password: FormControl;

    isSaving: boolean = false;
    constructor(private router: Router, private employeeService: EmployeeService ) { }
    ngOnInit() {
        this.FirstName = new FormControl('', Validators.required);
        this.LastName = new FormControl('', Validators.required);
        this.Email = new FormControl('', [Validators.required, Validators.email]);
        this.Password = new FormControl('', Validators.required);

        this.newEmployeeForm = new FormGroup({
            FirstName: this.FirstName,
            LastName: this.LastName,
            Email: this.Email,
            Password: this.Password
        });
    }
    backToList() {
        this.router.navigate(['list']);
    }
    createEmployee(formValues: any) {
        this.isSaving = true;
        this.employeeService.addEmployee(formValues).subscribe(() => {
            this.isSaving = false;
            alert("Employee created successfully.");
            this.backToList();
        }, function () {
            this.isSaving = false;
            alert("Something went wrong while creating employee.");
        });
        
    }
}
