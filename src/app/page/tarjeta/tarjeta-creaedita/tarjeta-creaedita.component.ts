import { TarjetaService } from './../../../service/tarjeta.service';
import { Router } from '@angular/router';
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

  constructor(private tarjetaService: TarjetaService,private router: Router) { }

  ngOnInit(): void {
  }
  aceptar(): void {
    if (this.tarjeta.Metodo.length > 0 &&this.tarjeta.Nombre.length > 0 && this.tarjeta.Apellido.length > 0 &&this.tarjeta.NumCuenta.length>0 &&this.tarjeta.FechaVen.length>0 &&this.tarjeta.NumCvc.length>0) {

      this.tarjetaService.insertar(this.tarjeta).subscribe(data => {
        this.tarjetaService.listar().subscribe(data => {
          this.tarjetaService.setLista(data);
        })
      })
      this.router.navigate(['tarjetas']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

}
