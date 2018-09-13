"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_employee_component_1 = require("./create-employee.component");
var employee_list_component_1 = require("./employee-list.component");
exports.routes = [
    { path: 'edit/:id', component: create_employee_component_1.CreateEmployeeComponent },
    { path: 'new', component: create_employee_component_1.CreateEmployeeComponent },
    { path: 'list', component: employee_list_component_1.EmployeeListComponent },
    { path: '', redirectTo: '/list', pathMatch: 'full' },
];
//# sourceMappingURL=routes.js.map