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
    function CreateEmployeeComponent(router, employeeService) {
        this.router = router;
        this.employeeService = employeeService;
        this.isSaving = false;
    }
    CreateEmployeeComponent.prototype.ngOnInit = function () {
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
    };
    CreateEmployeeComponent.prototype.backToList = function () {
        this.router.navigate(['list']);
    };
    CreateEmployeeComponent.prototype.createEmployee = function (formValues) {
        var _this = this;
        this.isSaving = true;
        this.employeeService.addEmployee(formValues).subscribe(function () {
            _this.isSaving = false;
            alert("Employee created successfully.");
            _this.backToList();
        }, function () {
            this.isSaving = false;
            alert("Something went wrong while creating employee.");
        });
    };
    CreateEmployeeComponent = __decorate([
        core_1.Component({
            templateUrl: "/employee/app/create-employee.component.html",
            styles: [
                "em {color:#E05C65; padding-left:10px}\n    .error input {background-color:#E3C3C5}\n    .error ::-webkit-input-placeholder {color:#999}\n    .error ::-moz-placeholder {color:#999}\n    .error :-moz-placeholder {color:#999}\n    .error :ms-input-placeholder {color:#999}\n     "
            ]
        }),
        __metadata("design:paramtypes", [router_1.Router, employee_service_1.EmployeeService])
    ], CreateEmployeeComponent);
    return CreateEmployeeComponent;
}());
exports.CreateEmployeeComponent = CreateEmployeeComponent;
//# sourceMappingURL=create-employee.component.js.map