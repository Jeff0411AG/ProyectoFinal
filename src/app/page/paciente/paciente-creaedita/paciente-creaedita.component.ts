import { PacienteService } from './../../../service/paciente.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/model/paciente';

@Component({
  selector: 'app-paciente-creaedita',
  templateUrl: './paciente-creaedita.component.html',
  styleUrls: ['./paciente-creaedita.component.css']
})
export class PacienteCreaeditaComponent implements OnInit {
  paciente: Paciente = new Paciente();
  mensaje: string = "";

  constructor(private pacienteService: PacienteService,private router: Router) { }

  ngOnInit(): void {
  }
  aceptar(): void {
    if (this.paciente.Nombre.length > 0 && this.paciente.Apellido.length > 0&&this.paciente.Dni.length>0) {

      this.pacienteService.insertar(this.paciente).subscribe(data => {
        this.pacienteService.listar().subscribe(data => {
          this.pacienteService.setLista(data);
        })
      })
      this.router.navigate(['pacientes']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

}
