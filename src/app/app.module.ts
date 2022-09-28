import { PacienteListarComponent } from './page/paciente/paciente-listar/paciente-listar.component';
import { PacienteCreaeditaComponent } from './page/paciente/paciente-creaedita/paciente-creaedita.component';
import { PacienteComponent } from './page/paciente/paciente.component';
import { TarjetaListarComponent } from './page/tarjeta/tarjeta-listar/tarjeta-listar.component';
import { TarjetaCreaeditaComponent } from './page/tarjeta/tarjeta-creaedita/tarjeta-creaedita.component';
import { TarjetaComponent } from './page/tarjeta/tarjeta.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import{MatIconModule} from'@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { TarjetaDialogoComponent } from './page/tarjeta/tarjeta-listar/tarjeta-dialogo/tarjeta-dialogo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TarjetaBuscarComponent } from './page/tarjeta/tarjeta-buscar/tarjeta-buscar.component';
import { PacienteBuscarComponent } from './page/paciente/paciente-buscar/paciente-buscar.component';
import { PacienteMensajeComponent } from './page/paciente/paciente-listar/paciente-mensaje/paciente-mensaje.component';

@NgModule({
  declarations: [
    AppComponent,

    TarjetaComponent,
    TarjetaCreaeditaComponent,
    TarjetaListarComponent,
    TarjetaCreaeditaComponent,
    TarjetaDialogoComponent,
    TarjetaBuscarComponent,
    PacienteCreaeditaComponent,
    PacienteListarComponent,
    PacienteBuscarComponent,
    PacienteMensajeComponent,
    PacienteComponent,
    

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
