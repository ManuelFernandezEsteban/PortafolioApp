import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Equipo } from '../../interfaces/info-pagina.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  equipo?:Equipo[]=[];
  constructor(public infoPaginaService:InfoPaginaService) {
    this.equipo=infoPaginaService.equipo;
    console.log(this.equipo);
    
   }

  ngOnInit(): void {
  }

}
