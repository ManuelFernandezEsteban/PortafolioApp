import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';
import { Observable } from 'rxjs';
import { ProductoCompleto } from '../interfaces/productoCompleto.interface';
//import { resolve } from 'dns';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando:boolean=true;
  productos:Producto[]=[];
  productosFiltrado:Producto[]=[];
  constructor(private http:HttpClient) {
    this.cargarProductos();
   }


  private cargarProductos(){    

    return new Promise((resolve)=>{
      this.http.get<Producto[]>('https://angular-html-template-manuel-default-rtdb.europe-west1.firebasedatabase.app/productos_idx.json')
      .subscribe((resp)=>{        
        this.productos=resp;
        setTimeout(() => {
          this.cargando=false;   
          resolve(true);
        }, 500);        
      })
    })

      
  }

  getProducto(id:string):Observable<ProductoCompleto>{
    return this.http.get<ProductoCompleto>(`https://angular-html-template-manuel-default-rtdb.europe-west1.firebasedatabase.app/productos/${id}.json`);
  }

  buscarProducto(termino:string){

    if ( this.productos.length === 0 ) {
      // cargar productos
      this.cargarProductos().then( () => {
        // ejecutar después de tener los productos
        // Aplicar filtro
        this.filtrarProductos( termino );
      });

    } else {
      // aplicar el filtro
      this.filtrarProductos( termino );
    }

    //console.log(this.productosFiltrado);
  }

  private filtrarProductos(termino:string){

    termino=termino.toLowerCase();
    this.productosFiltrado=[];
    this.productos.forEach(prod=>{
      if(prod.categoria.toLowerCase().indexOf(termino)>=0 || prod.titulo.toLowerCase().indexOf(termino)>=0){
        this.productosFiltrado.push(prod);
      }
    })

  }

}
