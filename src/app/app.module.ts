import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DevExtremeModule } from 'devextreme-angular';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { ProductoComponent } from './producto/producto.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { FormularioProductoComponent } from './producto/formulario-producto/formulario-producto/formulario-producto.component';
import { FormularioCategoriaComponent } from './categoria/formulario-categoria/formulario-categoria.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DevExtremeModule
  ],
  declarations: [
    AppComponent,
    MenuPrincipalComponent,
    ProductoComponent,
    CategoriaComponent,
    FormularioProductoComponent,
    FormularioCategoriaComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
