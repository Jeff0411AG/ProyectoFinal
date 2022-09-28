import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Consulta } from 'src/app/model/consulta';
import { ConsultaService } from 'src/app/service/consulta.service';

@Component({
  selector: 'app-consulta-creadita',
  templateUrl: './consulta-creadita.component.html',
  styleUrls: ['./consulta-creadita.component.css']
})
export class ConsultaCreaditaComponent implements OnInit {

  consulta:Consulta=new Consulta();
  mensaje:string="";

  edicion:boolean = false;
  id:number = 0;

  constructor(private consultaService:ConsultaService , private router:Router,
     private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data:Params)=>{
      this.id=data['id'];
      this.edicion=data['id'] != null;
      this.init();
    })
  }

  aceptar(){
    if(this.consulta.FechaConsulta.length>0 && this.consulta.Paciente.length>0 && this.consulta.Diagnostico.length>0 &&    
      this.consulta.Medico.length>0 && this.consulta.Obserbacion.length>0){
        if(this.edicion){
          this.consultaService.modificar(this.consulta).subscribe(data=>{
            this.consultaService.listar().subscribe(data=>{
              this.consultaService.setLista(data);
            })
          })
        }else{
          this.consultaService.insertar(this.consulta).subscribe(data=>{
          this.consultaService.listar().subscribe(data=>{
            this.consultaService.setLista(data);
          })
        })
        }
 
        this.router.navigate(['consultas']);
      }else{
        this.mensaje="Complete los valores requeridos"
      }
  }

  init(){
    if(this.edicion){
      this.consultaService.listarId(this.id).subscribe(data=>{
        this.consulta = data;
      })
    }
  }



}
