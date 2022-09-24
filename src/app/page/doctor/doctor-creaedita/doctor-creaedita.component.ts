import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../../model/doctor';
import { DoctorService } from '../../../service/doctor.service';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-doctor-creaedita',
  templateUrl: './doctor-creaedita.component.html',
  styleUrls: ['./doctor-creaedita.component.css']
})
export class DoctorCreaeditaComponent implements OnInit {
  doctor: Doctor =new Doctor();
  mensaje: string="";
  edicion: boolean =false;
  id:number=0;
  constructor(private doctorService: DoctorService  , private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe((data:Params)=>{
      this.id=data['id'];
      this.edicion=data['id']!=null;
      this.init();
    })
  }
  
  aceptar(): void {
    if (this.doctor.nombre.length > 0) {
      if (this.edicion) {
        this.doctorService.modificar(this.doctor).subscribe(data => {
          this.doctorService.listar().subscribe(data => {
            this.doctorService.setLista(data);
          })
        })
      } else {

        this.doctorService.insertar(this.doctor).subscribe(data => {
          this.doctorService.listar().subscribe(data => {
            this.doctorService.setLista(data);
          })
        })
      }
      this.router.navigate(['doctor']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }


    init() {
      if (this.edicion) {
        this.doctorService.listarId(this.id).subscribe(data => {
          this.doctor = data;
        })
      }

  }
}