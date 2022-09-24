import { Component, OnInit } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Consulta } from 'src/app/model/consulta';
import { ConsultaService } from 'src/app/service/consulta.service';

@Component({
  selector: 'app-consulta-listar',
  templateUrl: './consulta-listar.component.html',
  styleUrls: ['./consulta-listar.component.css']
})
export class ConsultaListarComponent implements OnInit {


  dataSource:MatTableDataSource<Consulta>=new MatTableDataSource();

  //displayedColumns:

  constructor(private pS:ConsultaService) { }

  ngOnInit(): void {

    this.pS.listar().subscribe(data=>{
      this.dataSource = new MatTableDataSource(data);

    })
  }


}
