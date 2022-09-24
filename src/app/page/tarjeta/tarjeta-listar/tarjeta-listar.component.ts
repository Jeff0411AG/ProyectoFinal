import { MatTableDataSource } from '@angular/material/table';
import { TarjetaService } from './../../../service/tarjeta.service';
import { Component, OnInit } from '@angular/core';
import { Tarjeta } from 'src/app/model/tarjeta';
@Component({
  selector: 'app-tarjeta-listar',
  templateUrl: './tarjeta-listar.component.html',
  styleUrls: ['./tarjeta-listar.component.css']
})
export class TarjetaListarComponent implements OnInit {
dataSource:MatTableDataSource<Tarjeta> = new MatTableDataSource();
displayedColumns:string[]=['Metodo','Nombre','Apellido','NumCuenta','FechaVen','NumCvc']
  constructor(private ps:TarjetaService) { }

  ngOnInit(): void {
    this.ps.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.ps.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

}
