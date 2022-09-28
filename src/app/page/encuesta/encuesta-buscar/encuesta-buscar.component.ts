import { EncuestaService } from './../../../service/encuesta.service';
import { Encuesta } from './../../../model/encuesta';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encuesta-buscar',
  templateUrl: './encuesta-buscar.component.html',
  styleUrls: ['./encuesta-buscar.component.css']
})
export class EncuestaBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private encuestaService: EncuestaService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: Encuesta[] = [];
    this.encuestaService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.idPaciente.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.encuestaService.setLista(array);
    })
  }

}
