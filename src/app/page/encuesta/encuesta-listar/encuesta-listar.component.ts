import { Encuesta } from './../../../model/encuesta';
import { EncuestaService } from './../../../service/encuesta.service';
import { EncuestaMensajeComponent } from './encuesta-mensaje/encuesta-mensaje.component'; 
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-encuesta-listar',
  templateUrl: './encuesta-listar.component.html',
  styleUrls: ['./encuesta-listar.component.css']
})
export class EncuestaListarComponent implements OnInit {
dataSource:MatTableDataSource<Encuesta> = new MatTableDataSource();
displayedColumns:string[]=['id','idPaciente','fechaconsulta','anotaciones','listarPregunta','accion1','accion2']
private idMayor: number = 0;
  constructor(private es:EncuestaService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.es.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.es.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.es.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
}
    
    confirmar(id: number) {
      this.idMayor = id;
       this.dialog.open(EncuestaMensajeComponent);
    }
  
  
    eliminar(id: number) {
      this.es.eliminar(id).subscribe(() => {
        this.es.listar().subscribe(data => {
          this.es.setLista(data);
                });
      });
  
    }
  

}
