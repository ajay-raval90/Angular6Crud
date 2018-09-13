"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var employee_service_1 = require("./shared/employee-service");
var CreateEmployeeComponent = /** @class */ (function () {
    function CreateEmployeeComponent(router, route, employeeService) {
        this.router = router;
        this.route = route;
        this.employeeService = employeeService;
        this.isEditMode = false;
        this.isFormReady = false;
        this.isSaving = false;
    }
    CreateEmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.route.snapshot.params["id"]) {
            //Edit Mode
            this.isEditMode = true;
            this.employeeService.getEmployeeById(+this.route.snapshot.params["id"]).subscribe(function (emp) {
                _this.Id = new forms_1.FormControl(emp.Id);
                _this.FirstName = new forms_1.FormControl(emp.FirstName, forms_1.Validators.required);
                _this.LastName = new forms_1.FormControl(emp.LastName, forms_1.Validators.required);
                _this.Email = new forms_1.FormControl(emp.Email, [forms_1.Validators.required, forms_1.Validators.email]);
                _this.Password = new forms_1.FormControl(emp.Password, forms_1.Validators.required);
                _this.newEmployeeForm = new forms_1.FormGroup({
                    Id: _this.Id,
                    FirstName: _this.FirstName,
                    LastName: _this.LastName,
                    Email: _this.Email,
                    Password: _this.Password
                });
                _this.isFormReady = true;
            }, function () {
                alert("Something went wrong while getting employee detail. Please refresh the page or try again later.");
                _this.backToList();
            });
        }
        else {
            //Add Mode
            this.FirstName = new forms_1.FormControl('', forms_1.Validators.required);
            this.LastName = new forms_1.FormControl('', forms_1.Validators.required);
            this.Email = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.email]);
            this.Password = new forms_1.FormControl('', forms_1.Validators.required);
            this.newEmployeeForm = new forms_1.FormGroup({
                FirstName: this.FirstName,
                LastName: this.LastName,
                Email: this.Email,
                Password: this.Password
            });
            this.isFormReady = true;
        }
    };
    CreateEmployeeComponent.prototype.backToList = function () {
        this.router.navigate(['list']);
    };
    CreateEmployeeComponent.prototype.createOrUpdateEmployee = function (formValues) {
        var _this = this;
        this.isSaving = true;
        if (!this.isEditMode) {
            this.employeeService.addEmployee(formValues).subscribe(function () {
                _this.isSaving = false;
                alert("Employee created successfully.");
                _this.backToList();
            }, function () {
                _this.isSaving = false;
                alert("Something went wrong while creating employee.");
            });
        }
        else {
            this.employeeService.updateEmployee(formValues).subscribe(function () {
                _this.isSaving = false;
                alert("Employee details updated successfully.");
                _this.backToList();
            }, function () {
                _this.isSaving = false;
                alert("Something went wrong while updating employee.");
            });
        }
    };
    CreateEmployeeComponent = __decorate([
        core_1.Component({
            templateUrl: "/employee/app/create-employee.component.html",
            styles: [
                "em {color:#E05C65; padding-left:10px}\n    .error input {background-color:#E3C3C5}\n    .error ::-webkit-input-placeholder {color:#999}\n    .error ::-moz-placeholder {color:#999}\n    .error :-moz-placeholder {color:#999}\n    .error :ms-input-placeholder {color:#999}\n     "
            ]
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, employee_service_1.EmployeeService])
    ], CreateEmployeeComponent);
    return CreateEmployeeComponent;
}());
exports.CreateEmployeeComponent = CreateEmployeeComponent;
//# sourceMappingURL=create-employee.component.js.map