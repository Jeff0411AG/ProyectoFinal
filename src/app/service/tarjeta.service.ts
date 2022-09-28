import { Injectable } from '@angular/core';
import { HttpClient} from'@angular/common/http';
import { Tarjeta } from '../model/tarjeta';
import { EMPTY, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TarjetaService {
  url: string = "http://localhost:5000/tarjetas";
  private listaCambio = new Subject<Tarjeta[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  
  constructor(private http: HttpClient) { }
  
  listar() {
    return this.http.get<Tarjeta[]>(this.url);
  }
  insertar(tarjeta: Tarjeta) {
    return this.http.post(this.url, tarjeta);
  }
  setLista(listaNueva: Tarjeta[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(tarjeta: Tarjeta) {
    return this.http.put(this.url + "/" + tarjeta.id, tarjeta);
  }
  listarId(id: number) {
    return this.http.get<Tarjeta>(`${this.url}/${id}`);
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
      return this.http.post<Tarjeta[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }
}