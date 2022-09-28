import { Injectable } from '@angular/core';
import { HttpClient} from'@angular/common/http';
import { Paciente } from '../model/paciente';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  url: string = "http://localhost:5000/pacientes";
  private listaCambio = new Subject<Paciente[]>()

  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) { }
  
  listar() {
    return this.http.get<Paciente[]>(this.url);
  }
  insertar(paciente: Paciente) {
    return this.http.post(this.url, paciente);
  }
  setLista(listaNueva: Paciente[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }

  eliminar(id:number){
    return this.http.delete(this.url + "/" + id);
  }

  getConfirmarEliminarcion(){
    return this.confirmaEliminacion.asObservable();
  }

  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }


}