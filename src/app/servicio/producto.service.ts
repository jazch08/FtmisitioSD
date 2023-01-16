import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  obtenerProductos1() {
    return this.http.get('http://localhost:3000/api/productos1')
  }

  obtenerProductoPorId1(id: number) {
    return this.http.get('http://localhost:3000/api/productos1/'+id.toString())
  }
  
  obtenerProductos2() {
    return this.http.get('http://localhost:3000/api/productos2')
  }

  obtenerProductoPorId2(id: number) {
    return this.http.get('http://localhost:3000/api/productos2/'+id.toString())
  }

  obtenerProductos3() {
    return this.http.get('http://localhost:3000/api/productos3')
  }

  obtenerProductoPorId3(id: number) {
    return this.http.get('http://localhost:3000/api/productos4/'+id.toString())
  }

}
