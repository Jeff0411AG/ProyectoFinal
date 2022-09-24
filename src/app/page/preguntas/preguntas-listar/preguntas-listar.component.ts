import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Preguntas } from 'src/app/model/preguntas';
import { PreguntasService } from 'src/app/service/preguntas.service';

@Component({
  selector: 'app-preguntas-listar',
  templateUrl: './preguntas-listar.component.html',
  styleUrls: ['./preguntas-listar.component.css']
})
export class PreguntasListarComponent implements OnInit {

  dataSource:MatTableDataSource<Preguntas>=new MatTableDataSource();
  displayedColumns:string[]=['idPregunta','Descripcion','Respuesta']

  constructor(private pS:PreguntasService) { }

  ngOnInit(): void {
    this.pS.listar().subscribe(data =>{
      this.dataSource=new MatTableDataSource(data);



    })


  }

}
