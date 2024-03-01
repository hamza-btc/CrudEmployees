import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

constructor(private serviceEmployee : ServiceService){}


listEmployees : Employee[]=[];

ngOnInit(): void {
  console.log('ng oninit');
   this.getEmployees();

}

getEmployees(){
 this.serviceEmployee.getAllEmployees().subscribe( data =>{
  this.listEmployees = data;
  console.log('listEmployees',this.listEmployees);
 })

}

delete(id:number) {
 this.serviceEmployee.deleteEmployee(id).subscribe( () => {
  this.listEmployees = this.listEmployees.filter( data => data.id != id)
  console.log('data');
 })
}




}
