import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { Doctor } from '../../../model/doctor';
import { DoctorService } from '../../../service/doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-creaedita',
  templateUrl: './doctor-creaedita.component.html',
  styleUrls: ['./doctor-creaedita.component.css']
})
export class DoctorCreaeditaComponent implements OnInit {
  doctor: Doctor =new Doctor();
  mensaje: string="";
  constructor(private doctorService: DoctorService, private router: Router) { }

  ngOnInit(): void {

  }
  aceptar(): void{
    //agregegar todas las condicionales
    if (this.doctor.nombre.length>0 && this.doctor.Apellido.length>0){
      this.doctorService.insertar(this.doctor).subscribe(data=>{
        this.doctorService.listar().subscribe(data=>{
          this.doctorService.setLista(data);
        })
        
      })
      this.router.navigate(['doctor'])
    }else{
      this.mensaje="completa los valores";
    }
  }


}
