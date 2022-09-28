import { EncuestaCreaeditaComponent } from './page/encuesta/encuesta-creaedita/encuesta-creaedita.component';
import { DoctorCreaeditaComponent } from './page/doctor/doctor-creaedita/doctor-creaedita.component';
import { PacienteComponent } from './page/paciente/paciente.component';
import { PacienteCreaeditaComponent } from './page/paciente/paciente-creaedita/paciente-creaedita.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './page/doctor/doctor.component';
import { EncuestaComponent } from './page/encuesta/encuesta.component';
const routes: Routes = [
  {

  path: 'doctores', component:DoctorComponent,children: 
  [

    {path: 'nuevo',component:DoctorCreaeditaComponent}

  ]

 },
 {
 path: 'pacientes', component: PacienteComponent, children:
 [
  { path: 'nuevo', component: PacienteCreaeditaComponent },
  { path: 'edicion/:id', component: PacienteCreaeditaComponent }
 ]},
 {
  path: 'encuestas', component: EncuestaComponent, children:[
  { path: 'nuevo', component: EncuestaCreaeditaComponent },
  { path: 'edicion/:id', component: EncuestaCreaeditaComponent }]
 }

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
