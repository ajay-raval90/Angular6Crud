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
var http_1 = require("@angular/http");
var RX_1 = require("rxjs/RX");
var EmployeeService = /** @class */ (function () {
    function EmployeeService(_http) {
        this._http = _http;
    }
    EmployeeService.prototype.getAllEmployees = function () {
        return this._http.get("/api/employee/action/GetAllEmployees").map(function (response) {
            return response.json();
        }).catch(this.handleError);
    };
    EmployeeService.prototype.getEmployeeById = function (Id) {
        return this._http.get("/api/employee/action/GetEmployeeById?Id=" + Id).map(function (response) {
            return response.json();
        }).catch(this.handleError);
    };
    EmployeeService.prototype.deleteEmployee = function (emp) {
        return this._http.delete("/api/employee/action/DeleteEmployee?Id=" + emp.Id).map(function (response) {
        }).catch(this.handleError);
    };
    EmployeeService.prototype.addEmployee = function (emp) {
        return this._http.post("/api/employee/action/AddEmployee", emp).map(function (response) {
        }).catch(this.handleError);
    };
    EmployeeService.prototype.updateEmployee = function (emp) {
        return this._http.put("/api/employee/action/UpdateEmployee", emp).map(function (response) {
        }).catch(this.handleError);
    };
    EmployeeService.prototype.handleError = function (error) {
        return RX_1.Observable.throw(error);
    };
    EmployeeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], EmployeeService);
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee-service.js.map