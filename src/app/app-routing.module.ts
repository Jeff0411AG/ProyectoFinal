import { PacienteComponent } from './page/paciente/paciente.component';
import { PacienteCreaeditaComponent } from './page/paciente/paciente-creaedita/paciente-creaedita.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorCreaeditaComponent } from './page/doctor/doctor-creaedita/doctor-creaedita.component';
import { DoctorComponent } from './page/doctor/doctor.component';
import { PreguntasComponent } from './page/preguntas/preguntas.component';
import { PreguntasCreaditaComponent } from './page/preguntas/preguntas-creadita/preguntas-creadita.component';
import { ConsultaComponent } from './page/consulta/consulta.component';
import { ConsultaCreaditaComponent } from './page/consulta/consulta-creadita/consulta-creadita.component';

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
  { path: 'nuevo', component: PacienteCreaeditaComponent }
 ]},


 {
 path: 'preguntas', component: PreguntasComponent, children:
 [
  { path: 'nuevo', component: PreguntasCreaditaComponent },
  { path: 'edicion/:id', component: PreguntasCreaditaComponent }
 ]
},

{
  path: 'consultas', component: ConsultaComponent, children:
  [
    { path: 'nuevo', component: ConsultaCreaditaComponent },
    { path: 'edicion/:id', component: ConsultaCreaditaComponent }
  ]
 },



 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
