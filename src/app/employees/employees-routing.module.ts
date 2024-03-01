import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  { path: '',redirectTo:'employee/home',pathMatch:'full'},
  { path: 'employee/home',component : HomeComponent},
  { path: 'employee/edit/:id',component : EditemployeeComponent},
  { path: 'employee/create',component: CreateComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
