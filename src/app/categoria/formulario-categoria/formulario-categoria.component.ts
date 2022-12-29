import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CategoriaService } from 'src/app/services/categorias.service';
import { Categoria } from 'src/app/shared/models/Categoria';

@Component({
  selector: 'app-formulario-categoria',
  templateUrl: './formulario-categoria.component.html',
  styleUrls: ['./formulario-categoria.component.css']
})
export class FormularioCategoriaComponent implements OnInit {
  @Input()categoriaInput: Categoria ={
    idcategoria : undefined,
    descripcion : "",
    estado : true,
    nombre : ""
  }
  @Output() popupCloser = new EventEmitter<boolean>();
  constructor(private categoriaService : CategoriaService) { }

  ngOnInit(): void {
  }
  
  SaveCategoria = () => {
    this.categoriaService.saveCategoria(this.categoriaInput).subscribe(response => {
    });
    window.location.reload();
  }

  closePopup = () => {
    this.popupCloser.emit(false);
  }

}
