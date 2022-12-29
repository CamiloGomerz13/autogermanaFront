import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../services/categorias.service';
import { Categoria } from '../shared/models/Categoria';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  dataGrid : Categoria[] = [];
  popupVisible = false;
  dataToChild : Categoria = {
    idcategoria : undefined,
    descripcion : "",
    estado : true,
    nombre : ""
  }
  showPopup(valor : boolean){
    this.popupVisible=!this.popupVisible;
  }

  getAllCategorias() {
    this.categoriaService.getAllCategories().subscribe(
      (x) => {
        this.dataGrid = x;
        console.log(this.dataGrid);
      },
    );
  }

  editarCategoria=(e : any):void =>{
    this.dataToChild = e.row.data;
    this.popupVisible=!this.popupVisible;
  }

  updateState=(e:any):void =>{
    this.categoriaService.updateState(e.row.data.idcategoria).subscribe(response => {
    });
    window.location.reload();
  }


  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.getAllCategorias();
  }

}
