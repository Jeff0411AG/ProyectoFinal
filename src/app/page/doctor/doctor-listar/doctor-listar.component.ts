import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Doctor } from 'src/app/model/doctor';
import { DoctorService } from 'src/app/service/doctor.service';


@Component({
  selector: 'app-doctor-listar',
  templateUrl: './doctor-listar.component.html',
  styleUrls: ['./doctor-listar.component.css']
})
export class DoctorListarComponent implements OnInit {

  dataSource:MatTableDataSource<Doctor>=new MatTableDataSource();
  displayedColumns:string[]=['id','nombre','Apellido','telefono','acciones'];
  constructor(private dS:DoctorService) { }

  ngOnInit(): void {
      this.dS.listar().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
    this.dS.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });

  }

  

}
