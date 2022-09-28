import { EncuestaService } from './../../../service/encuesta.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Encuesta } from 'src/app/model/encuesta';

@Component({
  selector: 'app-encuesta-creaedita',
  templateUrl: './encuesta-creaedita.component.html',
  styleUrls: ['./encuesta-creaedita.component.css']
})
export class EncuestaCreaeditaComponent implements OnInit {
  encuesta: Encuesta = new Encuesta();
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;

  constructor(private encuestaService: EncuestaService,private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }
  aceptar(): void {
    if (this.encuesta.idPaciente.length > 0 && this.encuesta.fechaconsulta.length > 0) {
        if (this.edicion){
          this.encuestaService.modificar(this.encuesta).subscribe(data => {
            this.encuestaService.listar().subscribe(data => {
              this.encuestaService.setLista(data);
            })
          })
        }
    else 
    {
      this.encuestaService.insertar(this.encuesta).subscribe(data => {
        this.encuestaService.listar().subscribe(data => {
          this.encuestaService.setLista(data);
        })
      })}
      this.router.navigate(['encuestas']);
    
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }
  init() {
    if (this.edicion) {
      this.encuestaService.listarId(this.id).subscribe(data => {
        this.encuesta = data;
      })
    }

  }

}
