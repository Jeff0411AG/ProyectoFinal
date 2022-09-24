import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarjetaComponent } from './page/tarjeta/tarjeta.component';
import { TarjetaCreaeditaComponent } from './page/tarjeta/tarjeta-creaedita/tarjeta-creaedita.component';
const routes: Routes = [
  {

  path: 'tarjetas', component: TarjetaComponent, children:
  [
   { path: 'nuevo', component: TarjetaCreaeditaComponent }
  ]}

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
