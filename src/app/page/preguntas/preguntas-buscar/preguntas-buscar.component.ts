import { Preguntas } from 'src/app/model/preguntas';
import { Component, OnInit } from '@angular/core';
import { PreguntasService } from 'src/app/service/preguntas.service';

@Component({
  selector: 'app-preguntas-buscar',
  templateUrl: './preguntas-buscar.component.html',
  styleUrls: ['./preguntas-buscar.component.css']
})
export class PreguntasBuscarComponent implements OnInit {

  textoBuscar: string = "";
  constructor(private pregutnasService:PreguntasService) { }

  ngOnInit(): void {
  }

  buscar(e:any){
    let array:Preguntas[]=[];
    this.pregutnasService.listar().subscribe(data=>{
      data.forEach((element,index)=>{
        if(element.Descripcion.includes(e.target.value)){
          array.push(data[index]);
        }
      })

      this.pregutnasService.setListar(array);

    })
  }

}
