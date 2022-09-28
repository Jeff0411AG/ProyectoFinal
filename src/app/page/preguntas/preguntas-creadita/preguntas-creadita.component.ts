import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Preguntas } from 'src/app/model/preguntas';
import { PreguntasService } from 'src/app/service/preguntas.service';

@Component({
  selector: 'app-preguntas-creadita',
  templateUrl: './preguntas-creadita.component.html',
  styleUrls: ['./preguntas-creadita.component.css']
})
export class PreguntasCreaditaComponent implements OnInit {

  pregunta:Preguntas=new Preguntas();
  mensaje:string="";


  constructor(private preguntasServicie:PreguntasService, private router:Router) { }

  ngOnInit(): void {
  }

  aceptar():void{
    if(this.pregunta.Descripcion.length>0 && this.pregunta.Respuesta.length>0){

      this.preguntasServicie.insertar(this.pregunta).subscribe(data=>{
        this.preguntasServicie.listar().subscribe(data=>{
          this.preguntasServicie.setListar(data);
        })
      })
      this.router.navigate(['preguntas']);

    }else{
      this.mensaje="Complete los valores requeridos";
    }
  }



}
