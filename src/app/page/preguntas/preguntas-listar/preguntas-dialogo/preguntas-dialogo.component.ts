import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PreguntasService } from 'src/app/service/preguntas.service';

@Component({
  selector: 'app-preguntas-dialogo',
  templateUrl: './preguntas-dialogo.component.html',
  styleUrls: ['./preguntas-dialogo.component.css']
})
export class PreguntasDialogoComponent implements OnInit {

  constructor(private pregutnasService: PreguntasService,
     private dialogRef:MatDialogRef<PreguntasDialogoComponent>) { }

  ngOnInit(): void {

  }

  confirmar(estado: boolean){
    this.pregutnasService.setConfirmaEliminacion(estado);
    this.dialogRef.close();

  }


}
