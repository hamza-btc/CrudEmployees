import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor( private http : HttpClient ) { }

  private apiUrl = "http://localhost:3000/employees/";
  
  getAllEmployees() {
   return  this.http.get<Employee[]>(this.apiUrl).pipe(
    catchError(this.handleError)
  );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }



  getEmployee(id:string) {
    return  this.http.get<Employee>(`${this.apiUrl}${id}`);
   }

   UpdateEmployee(data:Employee){
    return this.http.put<Employee>(`${this.apiUrl}${data.id}`,data);
   }

   deleteEmployee(id:number) {
    return this.http.delete(`${this.apiUrl}${id}`);
   }

   addEmployee(data:Employee){
    return this.http.post(this.apiUrl,data);
   }

}
