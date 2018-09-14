import { Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee.component'
import { EmployeeListComponent } from './employee-list.component'
import { EmployeeWrapperComponent } from './employee-wrapper.component'
export const routes: Routes = [
    { path: 'edit/:id', component: CreateEmployeeComponent},
    { path: 'new', component: EmployeeWrapperComponent },
    { path: 'list', component:  EmployeeListComponent },
    { path: '', redirectTo: '/list', pathMatch: 'full' },
];
