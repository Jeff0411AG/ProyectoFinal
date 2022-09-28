import { EncuestaService } from './../../../../service/encuesta.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-encuesta-mensaje',
  templateUrl: './encuesta-mensaje.component.html',
  styleUrls: ['./encuesta-mensaje.component.css']
})
export class EncuestaMensajeComponent implements OnInit {

  constructor(private encuestaService: EncuestaService,
    private dialogRef: MatDialogRef<EncuestaMensajeComponent>
  ) { }

  ngOnInit(): void { }

  confirmar(estado: boolean) {
    this.encuestaService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}

