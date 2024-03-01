import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrl: './editemployee.component.scss'
})
export class EditemployeeComponent  implements OnInit{

  formatData : Employee = {
   id : 0,
   name : '',
   price:'',
   telephone: '',
   quantity:''
  }

  constructor( 
    private route : ActivatedRoute,
    private employeeService: ServiceService,
    private router:Router
    
    ) {
    
  }

  ngOnInit(): void {
   let id = this.route.snapshot.params['id']; 
   this.edit(id);
  }

    edit(id:string) {
      this.employeeService.getEmployee(id).subscribe( data=> {
        this.formatData = data;
      })
    }

    update(data:Employee) {
    this.employeeService.UpdateEmployee(data).subscribe(data =>{
    this.formatData = data;
    })
    this.router.navigate(['/employee/home'])
    }


}
