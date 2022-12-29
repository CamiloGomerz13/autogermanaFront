import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { ProductoComponent } from './producto/producto.component';

const routes: Routes = [
  {path:'', component: MenuPrincipalComponent},
  {path:'producto', component: ProductoComponent},
  {path:'categoria', component: CategoriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
