import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../shared/models/Producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  popupVisible = false;
  dataGrid : Producto[] = [];
  dataToChild : Producto= {
    idproducto: undefined,
    idcategoria: "",
    codigo: "",
    nombre: "",
    precio_venta: 0,
    stock:0 ,
    descripcion: "",
    estado: true
  };

  showPopup(valor : boolean){
    this.popupVisible=!this.popupVisible;
  }

  getAllProducts() {
    this.productoService.getAllProducts().subscribe(
      (x) => {
        this.dataGrid = x;
        console.log(this.dataGrid);
      },
    );
  }

  editarProducto=(e : any):void =>{
    this.dataToChild = e.row.data;
    this.popupVisible=!this.popupVisible;
  }

  updateState=(e:any):void =>{
    this.productoService.updateState(e.row.data.idproducto).subscribe(response => {
    });
    window.location.reload();
  }

  
  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

}
