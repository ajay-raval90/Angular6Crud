"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var employee_list_component_1 = require("./employee-list.component");
var employee_service_1 = require("./shared/employee-service");
var create_employee_component_1 = require("./create-employee.component");
var jQuery_service_1 = require("./shared/jQuery-service");
var routes_1 = require("./routes");
var simple_modal_component_1 = require("./shared/simple-modal.component");
var modal_trigger_directive_1 = require("./shared/modal-trigger.directive");
var employee_wrapper_component_1 = require("./employee-wrapper.component");
var gender_pipe_1 = require("./shared/gender.pipe");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, router_1.RouterModule.forRoot(routes_1.routes), forms_1.FormsModule, forms_1.ReactiveFormsModule,],
            declarations: [app_component_1.AppComponent, employee_list_component_1.EmployeeListComponent, create_employee_component_1.CreateEmployeeComponent, simple_modal_component_1.SimpleModalComponent, modal_trigger_directive_1.ModalTriggerDirective, employee_wrapper_component_1.EmployeeWrapperComponent, gender_pipe_1.GenderPipe],
            providers: [employee_service_1.EmployeeService, { provide: jQuery_service_1.JQ_TOKEN, useValue: jQuery }, create_employee_component_1.CreateEmployeeComponent],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map