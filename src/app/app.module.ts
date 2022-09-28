import { PacienteListarComponent } from './page/paciente/paciente-listar/paciente-listar.component';
import { PacienteCreaeditaComponent } from './page/paciente/paciente-creaedita/paciente-creaedita.component';
import { PacienteComponent } from './page/paciente/paciente.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DoctorComponent } from './page/doctor/doctor.component';
import { DoctorListarComponent } from './page/doctor/doctor-listar/doctor-listar.component';
import { DoctorCreaeditaComponent } from './page/doctor/doctor-creaedita/doctor-creaedita.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import{MatIconModule} from'@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { PacienteBuscarComponent } from './page/paciente/paciente-buscar/paciente-buscar.component';
import { PacienteMensajeComponent } from './page/paciente/paciente-listar/paciente-mensaje/paciente-mensaje.component';
import { EncuestaComponent } from './page/encuesta/encuesta.component';
import { EncuestaListarComponent } from './page/encuesta/encuesta-listar/encuesta-listar.component';
import { EncuestaMensajeComponent } from './page/encuesta/encuesta-listar/encuesta-mensaje/encuesta-mensaje.component';
import { EncuestaCreaeditaComponent } from './page/encuesta/encuesta-creaedita/encuesta-creaedita.component';
import { EncuestaBuscarComponent } from './page/encuesta/encuesta-buscar/encuesta-buscar.component';
@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    DoctorListarComponent,
    DoctorCreaeditaComponent,
    PacienteComponent,
    PacienteCreaeditaComponent,
    PacienteListarComponent,
    PacienteBuscarComponent,
    PacienteMensajeComponent,
    EncuestaComponent,
    EncuestaListarComponent,
    EncuestaMensajeComponent,
    EncuestaCreaeditaComponent,
    EncuestaBuscarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatDialogModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
