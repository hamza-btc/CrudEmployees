import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { HomeComponent } from './home/home.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';
// import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    HomeComponent,
    EditemployeeComponent,
    HeaderComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    HttpClientModule,
    FormsModule,
    // ModalModule.forRoot()
  ]
})
export class EmployeesModule { }
