import { MatTableDataSource } from '@angular/material/table';
import { PacienteService } from './../../../service/paciente.service';
import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/model/paciente';
@Component({
  selector: 'app-paciente-listar',
  templateUrl: './paciente-listar.component.html',
  styleUrls: ['./paciente-listar.component.css']
})
export class PacienteListarComponent implements OnInit {
dataSource:MatTableDataSource<Paciente> = new MatTableDataSource();
displayedColumns:string[]=['Dni','Nombre','Apellido','FechaNacimiento','Telefono','NumHistoria','Diagnostico','Version']
  constructor(private ps:PacienteService) { }

  ngOnInit(): void {
    this.ps.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.ps.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

}
