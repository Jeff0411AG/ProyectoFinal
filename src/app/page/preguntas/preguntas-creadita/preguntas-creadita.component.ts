import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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

  edicion:boolean = false;
  id:number = 0;


  constructor(private preguntasServicie:PreguntasService, private router:Router,
     private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data:Params) =>{
      this.id=data['id'];
      this.edicion=data['id'] != null;
      this.init();
     
    })



  }

  aceptar():void{
    if(this.pregunta.Descripcion.length>0 && this.pregunta.Respuesta.length>0){

      if(this.edicion){
        this.preguntasServicie.modificar(this.pregunta).subscribe(data=>{
          this.preguntasServicie.listar().subscribe(data=>{
            this.preguntasServicie.setListar(data);
          })
        })
      }else{
        this.preguntasServicie.insertar(this.pregunta).subscribe(data=>{
          this.preguntasServicie.listar().subscribe(data=>{
            this.preguntasServicie.setListar(data);
          })
        })

      }
      this.router.navigate(['preguntas']);

    }else{
      this.mensaje="Complete los valores requeridos";
    }
  }

  init(){
    if(this.edicion){
      this.preguntasServicie.listarId(this.id).subscribe(data=>{
        this.pregunta=data;
      })
    }
  }





}
