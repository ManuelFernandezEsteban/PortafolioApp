import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Equipo, InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  equipo?:Equipo[];
  info?:InfoPagina;
  cargada:boolean=false;

  constructor(private http:HttpClient) {
    this.cargarInfoInicial();
    this.cargarEquipo();
   }

   private cargarInfoInicial(){
     this.http.get<InfoPagina>('assets/data/data-pagina.json')
      .subscribe(resp=>{
        this.cargada=true;
        this.info=resp;
        console.log(resp);
    })
   }

   private cargarEquipo(){
    this.http.get<Equipo[]>('https://angular-html-template-manuel-default-rtdb.europe-west1.firebasedatabase.app/equipo.json')
    .subscribe(resp=>{
      
      this.equipo=resp;
      console.log(this.equipo);
  })
   }
}
