import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Preguntas } from 'src/app/model/preguntas';
import { PreguntasService } from 'src/app/service/preguntas.service';
import { MatDialog } from '@angular/material/dialog';
import { PreguntasDialogoComponent } from './preguntas-dialogo/preguntas-dialogo.component';

@Component({
  selector: 'app-preguntas-listar',
  templateUrl: './preguntas-listar.component.html',
  styleUrls: ['./preguntas-listar.component.css']
})
export class PreguntasListarComponent implements OnInit {

  dataSource:MatTableDataSource<Preguntas>=new MatTableDataSource();
  displayedColumns:string[]=['id','Descripcion','Respuesta','Acciones', 'Accion2'];

  private idMayor:number = 0;

  constructor(private pS:PreguntasService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.pS.listar().subscribe(data =>{
      this.dataSource=new MatTableDataSource(data);
    })

    this.pS.getLista().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })

    this.pS.getConfirmaEliminacion().subscribe(data=>{
      data == true ? this.eliminar(this.idMayor) : false;
    })

  
  }

  confirmar(id:number){
    this.idMayor = id;
    this.dialog.open(PreguntasDialogoComponent);
  }

  eliminar(id:number){
    this.pS.eliminar(id).subscribe(()=>{
      this.pS.listar().subscribe(data=>{
        this.pS.setListar(data);
      })
    })
  }



}
