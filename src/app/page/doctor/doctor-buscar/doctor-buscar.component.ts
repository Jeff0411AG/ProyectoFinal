import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/model/doctor';
import { DoctorService } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-doctor-buscar',
  templateUrl: './doctor-buscar.component.html',
  styleUrls: ['./doctor-buscar.component.css']
})
export class DoctorBuscarComponent implements OnInit {
  textoBuscar="";
  

  constructor(private doctorService: DoctorService) { }


  ngOnInit(): void {
  }
  buscar(e: any){
    let array: Doctor[]=[];
    this.doctorService.listar().subscribe(data=>
      {
        data.forEach((Element,index)=>
        {
          if(Element.nombre.includes(e.target.value))
          {
            array.push(data[index]);
          }
        });
        this.doctorService.setLista(array);
      })
  }

}
