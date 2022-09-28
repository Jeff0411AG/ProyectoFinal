import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Consulta } from 'src/app/model/consulta';
import { ConsultaService } from 'src/app/service/consulta.service';
import { MatDialog } from '@angular/material/dialog';
import { ConsultaDialogoComponent } from './consulta-dialogo/consulta-dialogo.component';
@Component({
  selector: 'app-consulta-listar',
  templateUrl: './consulta-listar.component.html',
  styleUrls: ['./consulta-listar.component.css']
})
export class ConsultaListarComponent implements OnInit {

  dataSource:MatTableDataSource<Consulta>=new MatTableDataSource();
  displayedColumns: string[] = ['id', 'FechaConsulta', 'Paciente','Medico','Diagnostico','Obserbacion','Acciones','Accion2'];
  private idMayor: number = 0;
  constructor(private ps:ConsultaService,private dialog: MatDialog ) { }

  ngOnInit(): void {
    this.ps.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.ps.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });

    this.ps.getConfirmaEliminacion().subscribe(data=>{
      data == true ? this.eliminar(this.idMayor):false;
    })

  }

  confirmar(id:number){
    this.idMayor=id;
    this.dialog.open(ConsultaDialogoComponent);

  }




  eliminar(id:number){
    this.ps.eliminar(id).subscribe(()=>{
      this.ps.listar().subscribe(data=>{
        this.ps.setLista(data);
      });
    });
  }




}
