import { PacienteComponent } from './page/paciente/paciente.component';
import { PacienteCreaeditaComponent } from './page/paciente/paciente-creaedita/paciente-creaedita.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './page/doctor/doctor.component';
import { DoctorCreaeditaComponent } from './page/doctor/doctor-creaedita/doctor-creaedita.component';
const routes: Routes = [
  {

  path: 'doctores', component:DoctorComponent,children: 
  [
                  //llama al componente correcto
    {path: 'nuevo',component:DoctorCreaeditaComponent}

  ]

 },
 {
 path: 'pacientes', component: PacienteComponent, children:
 [
  { path: 'nuevo', component: PacienteCreaeditaComponent }
 ]}

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
