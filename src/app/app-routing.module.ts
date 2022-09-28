
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PacienteComponent } from './page/paciente/paciente.component';
import { PacienteCreaeditaComponent } from './page/paciente/paciente-creaedita/paciente-creaedita.component';

import { DoctorComponent } from './page/doctor/doctor.component';
import { DoctorCreaeditaComponent } from './page/doctor/doctor-creaedita/doctor-creaedita.component';

import { TarjetaComponent } from './page/tarjeta/tarjeta.component';
import { TarjetaCreaeditaComponent } from './page/tarjeta/tarjeta-creaedita/tarjeta-creaedita.component';


const routes: Routes = [
  {

   path: 'doctor', component:DoctorComponent,children: 
   [

    {path: 'nuevo',component:DoctorCreaeditaComponent},
    {path: 'edicion/:id', component: DoctorCreaeditaComponent }
   ]
  },
  {
    path: 'tarjetas', component: TarjetaComponent, children:
    [
      { path: 'nuevo', component: TarjetaCreaeditaComponent },
      { path: 'edicion/:id', component: TarjetaCreaeditaComponent }
    ]
  },
  {
    path: 'pacientes', component: PacienteComponent, children:
    [
     { path: 'nuevo', component: PacienteCreaeditaComponent },
     { path: 'edicion/:id', component: PacienteCreaeditaComponent }
   
    ]
  }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
