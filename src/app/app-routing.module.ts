import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './page/doctor/doctor.component';


const routes: Routes = [
  {

  path: 'doctores', component:DoctorComponent,children: 
  [

    {path: 'nuevo',component:DoctorComponent}

  ]

 }

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
