import { MatTableDataSource } from '@angular/material/table';
import { TarjetaService } from './../../../service/tarjeta.service';
import { Component, OnInit } from '@angular/core';
import { Tarjeta } from 'src/app/model/tarjeta';
import { MatDialog } from '@angular/material/dialog';
import { TarjetaDialogoComponent } from './tarjeta-dialogo/tarjeta-dialogo.component';
@Component({
  selector: 'app-tarjeta-listar',
  templateUrl: './tarjeta-listar.component.html',
  styleUrls: ['./tarjeta-listar.component.css']
})
export class TarjetaListarComponent implements OnInit {
dataSource:MatTableDataSource<Tarjeta> = new MatTableDataSource();
displayedColumns:string[]=['id','Metodo','Nombre','Apellido','NumCuenta','FechaVen','NumCvc', 'accion1', 'accion2'];
private idMayor: number = 0;
  constructor(private ps:TarjetaService, private dialog: MatDialog) { }
  
  ngOnInit(): void {
    this.ps.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.ps.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.ps.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
}
confirmar(id: number) {
  this.idMayor = id;
  this.dialog.open(TarjetaDialogoComponent);
}


eliminar(id: number) {
  this.ps.eliminar(id).subscribe(() => {
    this.ps.listar().subscribe(data => {
      this.ps.setLista(data);/* se ejecuta la línea 27*/
    });
  });

}
}
