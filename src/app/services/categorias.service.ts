import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs';
import { Categoria } from '../shared/models/Categoria';


const urlBase = "https://localhost:44325/api/Categoria";
@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  public getAllCategories(){
    return this.http
    .get<Categoria[]>(`${urlBase}/GetAll`);
  }

  public saveCategoria(categoria : Categoria){
    return this.http
    .post<Categoria>(`${urlBase}/SaveOrUpdateCategoria`,categoria);
  }

  public updateState(idCategoria : string){
    return this.http
    .post<string>(`${urlBase}/UpdateState?idCategoria=${idCategoria}`,{});
  }


  constructor(private http : HttpClient) { }
}
