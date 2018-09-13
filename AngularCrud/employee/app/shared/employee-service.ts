import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Subject, Observable } from 'rxjs/RX';
@Injectable()
export class EmployeeService {
    constructor(private _http: Http) {
    }
    getAllEmployees():Observable<any> {
        return this._http.get("/api/employee/action/GetAllEmployees").map((response: Response) => {
            return response.json();
        }).catch(this.handleError);
    }
    getEmployeeById(Id:number): Observable<any> {
        return this._http.get("/api/employee/action/GetEmployeeById?Id=" + Id).map((response: Response) => {
            return response.json();
        }).catch(this.handleError);
    }
    deleteEmployee(emp: any): Observable<any> {
        return this._http.delete("/api/employee/action/DeleteEmployee?Id=" + emp.Id).map((response: Response) => {
            
        }).catch(this.handleError)
    }
    addEmployee(emp: any): Observable<any> {
        return this._http.post("/api/employee/action/AddEmployee",emp).map((response: Response) => {

        }).catch(this.handleError)
    }
    updateEmployee(emp: any): Observable<any> {
        return this._http.put("/api/employee/action/UpdateEmployee", emp).map((response: Response) => {

        }).catch(this.handleError)
    }

    handleError(error: Response) {
        return Observable.throw(error);
    }
}