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
var employee_service_1 = require("./shared/employee-service");
var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent(empService, router) {
        this.empService = empService;
        this.router = router;
        this.Employees = [];
        this.IsemployeeLoaded = false;
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        this.loademployees();
    };
    EmployeeListComponent.prototype.loademployees = function () {
        var _this = this;
        this.empService.getAllEmployees().subscribe(function (employees) {
            _this.Employees = employees;
            _this.IsemployeeLoaded = true;
        });
    };
    EmployeeListComponent.prototype.addEmployee = function () {
        this.router.navigate(['/new']);
    };
    EmployeeListComponent.prototype.deleteEmployee = function (emp) {
        var _this = this;
        this.empService.deleteEmployee(emp).subscribe(function () {
            _this.loademployees();
            alert("Employee Deleted Successfully");
        });
    };
    EmployeeListComponent = __decorate([
        core_1.Component({
            selector: 'employee-list',
            templateUrl: '/employee/app/employee-list.component.html'
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService, router_1.Router])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employee-list.component.js.map