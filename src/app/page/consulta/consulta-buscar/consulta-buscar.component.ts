import { Consulta } from 'src/app/model/consulta';
import { ConsultaService } from 'src/app/service/consulta.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-buscar',
  templateUrl: './consulta-buscar.component.html',
  styleUrls: ['./consulta-buscar.component.css']
})
export class ConsultaBuscarComponent implements OnInit {
  textoBuscar: string = "";
  constructor(private consultaservice:ConsultaService) { }

  ngOnInit(): void {
  }

  buscar(e: any) {
    let array: Consulta[] = [];
    this.consultaservice.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.Medico.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.consultaservice.setLista(array);
    })
  }

}
