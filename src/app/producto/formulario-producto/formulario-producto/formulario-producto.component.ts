import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CategoriaService } from 'src/app/services/categorias.service';
import { ProductoService } from 'src/app/services/producto.service';
import { Categoria } from 'src/app/shared/models/Categoria';
import { Producto } from 'src/app/shared/models/Producto';
import { ProductoComponent } from '../../producto.component';
@Component({
  selector: 'app-formulario-producto',
  templateUrl: './formulario-producto.component.html',
  styleUrls: ['./formulario-producto.component.css']
})
export class FormularioProductoComponent implements OnInit {

  @Input()productoInput: Producto = {
    idproducto: undefined,
    idcategoria: "",
    codigo: "",
    nombre: "",
    precio_venta: 0,
    stock:0 ,
    descripcion: "",
    estado: true
  };

  @Output() popupCloser = new EventEmitter<boolean>();
  categoriaToSelect : Categoria[]=[];

  getAllCategorias() {
    this.categoriaService.getAllCategories().subscribe(
      (x) => {
        this.categoriaToSelect = x;
      },
    );
  }

  constructor(private categoriaService : CategoriaService, private productoService : ProductoService) { 
  }

  ngOnInit(): void {
    this.getAllCategorias();
  }

  SaveProducto = () => {
    console.log(this.productoInput);
    this.productoService.saveProduct(this.productoInput).subscribe(response => {
    });
    window.location.reload();
  }


  closePopup = () => {
    this.popupCloser.emit(false);
  }

}
