import { TarjetaService } from './../../../service/tarjeta.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Tarjeta } from 'src/app/model/tarjeta';

@Component({
  selector: 'app-tarjeta-creaedita',
  templateUrl: './tarjeta-creaedita.component.html',
  styleUrls: ['./tarjeta-creaedita.component.css']
})
export class TarjetaCreaeditaComponent implements OnInit {
  tarjeta: Tarjeta = new Tarjeta();
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;

  constructor(private tarjetaService: TarjetaService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
  });
}
  aceptar(): void {
    if (this.tarjeta.Nombre.length > 0 && this.tarjeta.Apellido.length > 0) {
      if(this.edicion){
        this.tarjetaService.modificar(this.tarjeta).subscribe(data => {
          this.tarjetaService.listar().subscribe(data => {
            this.tarjetaService.setLista(data);
      })
    })
  }else{
      this.tarjetaService.insertar(this.tarjeta).subscribe(data => {
        this.tarjetaService.listar().subscribe(data => {
          this.tarjetaService.setLista(data);
        })
      })
    }
      this.router.navigate(['tarjetas']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }
  init(){
    if(this.edicion){
      this.tarjetaService.listarId(this.id).subscribe(data => {
        this.tarjeta = data;
    })
  }
  }
}
