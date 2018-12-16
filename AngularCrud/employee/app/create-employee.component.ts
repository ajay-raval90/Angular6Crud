import { Component, OnInit} from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { FormGroup, FormControl, Validators, FormArray} from '@angular/forms'
import { EmployeeService } from './shared/employee-service'
import { debounce } from 'rxjs/operators';
import { debug } from 'util';
@Component({
    selector:'create-employee',
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
    validskills = [
        { name: 'HTML', id: 0 },
        { name: 'JS', id: 1 },
        { name: 'CSS', id: 2 },
        { name: 'SQL', id: 3 },
        { name: 'C#', id: 4 },
        { name: 'MVC', id: 5 }
    ];
    validGenders = [{ 'id': 1, 'value': 'Male' }, { 'id': 2, 'value': 'Female' }];
    newEmployeeForm: FormGroup;
    Id: FormControl;
    FirstName: FormControl;
    LastName: FormControl;
    Email: FormControl;
    Password: FormControl;
    Gender: FormControl;
    Skills: FormArray;
    isEditMode: boolean = false;
    isFormReady: boolean = false;
    isSaving: boolean = false;
    constructor(private router: Router, private route: ActivatedRoute, private employeeService: EmployeeService) { }
    ngOnInit() {
        
        if (this.route.snapshot.params["id"]) {
            //Edit Mode
            this.isEditMode = true;
            this.employeeService.getEmployeeById(+this.route.snapshot.params["id"]).subscribe((emp) => {
                this.buildSkills(emp.SelectedSkills.split(','));
                this.Id  = new FormControl(emp.Id);
                this.FirstName = new FormControl(emp.FirstName, Validators.required);
                this.LastName = new FormControl(emp.LastName, Validators.required);
                this.Email = new FormControl(emp.Email, [Validators.required, Validators.email]);
                this.Password = new FormControl(emp.Password, Validators.required);
                this.Gender = new FormControl(emp.Gender);
                this.newEmployeeForm = new FormGroup({
                    Id: this.Id,
                    FirstName: this.FirstName,
                    LastName: this.LastName,
                    Email: this.Email,
                    Password: this.Password,
                    Gender: this.Gender,
                    Skills: this.Skills
                });
                this.isFormReady = true;
            }, () => {
                alert("Something went wrong while getting employee detail. Please refresh the page or try again later.");
                this.backToList();
            })

        }
        else {
            //Add Mode
            this.buildSkills();
            this.FirstName = new FormControl('', Validators.required);
            this.LastName = new FormControl('', Validators.required);
            this.Email = new FormControl('', [Validators.required, Validators.email]);
            this.Password = new FormControl('', Validators.required);
            this.Gender = new FormControl('');
            this.newEmployeeForm = new FormGroup({
                FirstName: this.FirstName,
                LastName: this.LastName,
                Email: this.Email,
                Password: this.Password,
                Gender: this.Gender,
                Skills: this.Skills
            });
            this.isFormReady = true;

        }
    }
    backToList() {
        this.router.navigate(['list']);
    }
    createOrUpdateEmployee(formValues: any) {
        formValues.SelectedSkills = this.transformSkillsInIds(formValues.Skills);
        this.isSaving = true;
        if (!this.isEditMode) {
            this.employeeService.addEmployee(formValues).subscribe(() => {
                this.isSaving = false;
                alert("Employee created successfully.");
                this.backToList();
            }, ()=>{
                this.isSaving = false;
                alert("Something went wrong while creating employee.");
            });
        }
        else {
            this.employeeService.updateEmployee(formValues).subscribe(() => {
                this.isSaving = false;
                alert("Employee details updated successfully.");
                this.backToList();
            }, ()=> {

                this.isSaving = false;
                alert("Something went wrong while updating employee.");
            });
        }
    }

    buildSkills(selectedSkillIds?: Array<string>) {
        const arr = this.validskills.map(skill => {
            if (selectedSkillIds != null && selectedSkillIds.indexOf(skill.id.toString()) > -1) {
                return new FormControl(true);
            }
            return new FormControl(false);
        });
        this.Skills = new FormArray(arr);
    }

    transformSkillsInIds(s: Array<boolean>):string {
        let count: number = 0;
        let selectedSkillsIds: Array<number> = [];
        s.forEach(x => {
            if (x == true) {
                selectedSkillsIds.push(this.validskills[count].id);
            }
            count++;
        });
        return selectedSkillsIds.join(",");
    }
}
