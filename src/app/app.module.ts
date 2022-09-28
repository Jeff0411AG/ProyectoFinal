import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from'@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { PacienteListarComponent } from './page/paciente/paciente-listar/paciente-listar.component';
import { PacienteCreaeditaComponent } from './page/paciente/paciente-creaedita/paciente-creaedita.component';
import { PacienteComponent } from './page/paciente/paciente.component';
import { PacienteBuscarComponent } from './page/paciente/paciente-buscar/paciente-buscar.component';
import { PacienteMensajeComponent } from './page/paciente/paciente-listar/paciente-mensaje/paciente-mensaje.component';

import { TarjetaListarComponent } from './page/tarjeta/tarjeta-listar/tarjeta-listar.component';
import { TarjetaCreaeditaComponent } from './page/tarjeta/tarjeta-creaedita/tarjeta-creaedita.component';
import { TarjetaComponent } from './page/tarjeta/tarjeta.component';
import { TarjetaDialogoComponent } from './page/tarjeta/tarjeta-listar/tarjeta-dialogo/tarjeta-dialogo.component';
import { TarjetaBuscarComponent } from './page/tarjeta/tarjeta-buscar/tarjeta-buscar.component';


import { DoctorComponent } from './page/doctor/doctor.component';
import { DoctorListarComponent } from './page/doctor/doctor-listar/doctor-listar.component';
import { DoctorCreaeditaComponent } from './page/doctor/doctor-creaedita/doctor-creaedita.component';
import { DoctorDialogoComponent } from './page/doctor/doctor-listar/doctor-dialogo/doctor-dialogo.component';
import { DoctorBuscarComponent } from './page/doctor/doctor-buscar/doctor-buscar.component';


import { PreguntasComponent } from './page/preguntas/preguntas.component';
import { PreguntasListarComponent } from './page/preguntas/preguntas-listar/preguntas-listar.component';
import { PreguntasCreaditaComponent } from './page/preguntas/preguntas-creadita/preguntas-creadita.component';
import { ConsultaComponent } from './page/consulta/consulta.component';
import { ConsultaListarComponent } from './page/consulta/consulta-listar/consulta-listar.component';
import { ConsultaCreaditaComponent } from './page/consulta/consulta-creadita/consulta-creadita.component';




@NgModule({
  declarations: [
    AppComponent,

    DoctorComponent,
    DoctorListarComponent,
    DoctorCreaeditaComponent,

    DoctorDialogoComponent,
    DoctorBuscarComponent,

    PacienteComponent,
    PacienteListarComponent,
    PacienteCreaeditaComponent,   
    PacienteMensajeComponent,
    PacienteBuscarComponent,

    TarjetaComponent,
    TarjetaListarComponent,
    TarjetaCreaeditaComponent,
    TarjetaDialogoComponent,
    TarjetaBuscarComponent,

    
    PacienteComponent,
    PacienteCreaeditaComponent,
    PacienteListarComponent,

    PreguntasComponent,
    PreguntasListarComponent,
    PreguntasCreaditaComponent,
    
    ConsultaComponent,
    ConsultaListarComponent,
    ConsultaCreaditaComponent

    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,


    MatDialogModule,

    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
