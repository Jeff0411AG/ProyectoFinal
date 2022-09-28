import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Consulta } from 'src/app/model/consulta';
import { ConsultaService } from 'src/app/service/consulta.service';

@Component({
  selector: 'app-consulta-listar',
  templateUrl: './consulta-listar.component.html',
  styleUrls: ['./consulta-listar.component.css']
})
export class ConsultaListarComponent implements OnInit {

  dataSource:MatTableDataSource<Consulta>=new MatTableDataSource();
  displayedColumns: string[] = ['id', 'FechaConsulta', 'Paciente','Medico','Diagnostico','Obserbacion','Acciones'];

  constructor(private ps:ConsultaService) { }

  ngOnInit(): void {
    this.ps.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.ps.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });

  }

}
