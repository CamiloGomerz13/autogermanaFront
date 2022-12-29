import { Injectable } from '@angular/core';
import { Producto } from '../shared/models/Producto';
import { HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs';


const urlBase = "https://localhost:44325/api/Producto";
@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  public getAllProducts(){
    return this.http
    .get<Producto[]>(`${urlBase}/GetAll`);
  }

  public saveProduct(producto : Producto){
    return this.http
    .post<Producto>(`${urlBase}/SaveOrUpdateProducto`,producto);
  }

  public updateState(idProducto : string){
    return this.http
    .post<string>(`${urlBase}/updateState?idProducto=${idProducto}`,{});
  }
  
  constructor(private http : HttpClient) { }
}
