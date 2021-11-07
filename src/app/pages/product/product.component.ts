import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoCompleto } from '../../interfaces/productoCompleto.interface';
import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  cargando:boolean=true;
  id:string='';

  producto:ProductoCompleto={
    categoria:  '',
    desc1:      '',
    desc2:      '',
    producto:   '',
    resumen:    '',
    subtitulo1: '',
    subtitulo2: ''
  };

  constructor(private route:ActivatedRoute,
              public productoService:ProductosService) { }

  ngOnInit(): void {

    this.route.params.subscribe(parametros=>{
      //console.log(parametros['productoId']);
      this.productoService.getProducto(parametros['productoId']).subscribe(producto=>{

        //console.log(producto);
        this.producto=producto;
        this.id=parametros['productoId'];
        setTimeout(() => {
          this.cargando=false;
        }, 500);
        
      })
    })
  }

}
