import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../servicio/producto.service';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre'];
  dataSource = [];

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.productoService.obtenerProductos1().subscribe(respuesta => {
      this.dataSource = respuesta as any
    })

    setTimeout(() => {
      this.productoService.obtenerProductos2().subscribe(respuesta => {
        this.dataSource = this.dataSource.concat(respuesta as any)
      })
    }, 1500)

    setTimeout(() => {
      this.productoService.obtenerProductos3().subscribe(respuesta => {
        this.dataSource = this.dataSource.concat(respuesta as any)
      })
    }, 3000)
    
  }

}
