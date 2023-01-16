import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../servicio/producto.service';
import { Producto } from '../interfaz/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  item: Producto = {
    id:-1,
    nombre:'',
    cantidad:0,
    createdAt:'',
    updatedAt:''
  }

  constructor(
    private productoService: ProductoService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {

    let params = this.activatedRoute.snapshot.params
    let id = params['id']

    this.productoService.obtenerProductoPorId1(id).subscribe(respuesta => {
      this.item = respuesta as Producto
    })
  }

}
