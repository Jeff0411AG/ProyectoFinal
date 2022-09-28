import { Encuesta } from './../model/encuesta';
import { Injectable } from '@angular/core';
import { HttpClient} from'@angular/common/http';
import { EMPTY, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EncuestaService {
  url: string = "http://localhost:5000/encuestas";
  private listaCambio = new Subject<Encuesta[]>()
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) { }
  
  listar() {
    return this.http.get<Encuesta[]>(this.url);
  }
  insertar(encuesta: Encuesta) {
    return this.http.post(this.url, encuesta);
  }
  setLista(listaNueva: Encuesta[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(encuesta: Encuesta) {
    return this.http.put(this.url + "/" + encuesta.id, encuesta);
  }
  listarId(id: number) {
    return this.http.get<Encuesta>(`${this.url}/${id}`);
  }
  eliminar(id: number) {
    return this.http.delete(this.url + "/" + id);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
  buscar(texto: string) {
    if (texto.length != 0) {
      return this.http.post<Encuesta[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }

}