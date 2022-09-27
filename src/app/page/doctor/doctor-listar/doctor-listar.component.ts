import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Doctor } from 'src/app/model/doctor';
import { DoctorService } from 'src/app/service/doctor.service';
import { MatDialog } from '@angular/material/dialog';
import { DoctorDialogoComponent } from './doctor-dialogo/doctor-dialogo.component';


@Component({
  selector: 'app-doctor-listar',
  templateUrl: './doctor-listar.component.html',
  styleUrls: ['./doctor-listar.component.css']
})
export class DoctorListarComponent implements OnInit {

  dataSource:MatTableDataSource<Doctor>=new MatTableDataSource();
  displayedColumns:string[]=['id','nombre','Apellido','accion1','accion2'];
  private idMayor: number = 0;
  constructor(private dS:DoctorService, private dialog: MatDialog) { }

  ngOnInit(): void {
      this.dS.listar().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
    this.dS.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.dS.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });

  }

  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(DoctorDialogoComponent);
  }


  eliminar(id: number) {
    this.dS.eliminar(id).subscribe(() => {
      this.dS.listar().subscribe(data => {
        this.dS.setLista(data);/* se ejecuta la línea 27*/
      });
    });
  }

}

