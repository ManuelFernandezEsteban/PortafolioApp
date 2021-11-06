import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando:boolean=true;
  productos:Producto[]=[];

  constructor(private http:HttpClient) {
    this.cargarProductos();
   }


  private cargarProductos(){
    this.http.get<Producto[]>('https://angular-html-template-manuel-default-rtdb.europe-west1.firebasedatabase.app/productos_idx.json')
      .subscribe((resp)=>{
        console.log(resp);
        this.productos=resp;
        setTimeout(() => {
          this.cargando=false;
        }, 500);

        
    })
  }
}
