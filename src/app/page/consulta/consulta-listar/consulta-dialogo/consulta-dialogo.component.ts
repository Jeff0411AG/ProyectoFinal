import { ConsultaService } from 'src/app/service/consulta.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-consulta-dialogo',
  templateUrl: './consulta-dialogo.component.html',
  styleUrls: ['./consulta-dialogo.component.css']
})
export class ConsultaDialogoComponent implements OnInit {

  constructor(private consultaService:ConsultaService, private dialoRef:MatDialogRef<ConsultaDialogoComponent>) { }

  ngOnInit(): void {
  }


  confirmar (estado:boolean){
    this.consultaService.setConfirmaEliminacion(estado);
    this.dialoRef.close();
  }

}
