import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent  implements OnInit{

  constructor(
     private serviceEmplyee:ServiceService,
     private router : Router
    ) {

  }
  ngOnInit(): void {
    
  }


  AddEmplyee(){

  }

  submitForm(data:any) {
    console.log('value de from',data)
    this.serviceEmplyee.addEmployee(data).subscribe( data => {
      console.log('data add',data);
      this.router.navigate(['employee/home'])
      
    })
  }
}
