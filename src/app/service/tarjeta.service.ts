import { Injectable } from '@angular/core';
import { HttpClient} from'@angular/common/http';
import { Tarjeta } from '../model/tarjeta';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TarjetaService {
  url: string = "http://localhost:5000/tarjetas";
  private listaCambio = new Subject<Tarjeta[]>()
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
}