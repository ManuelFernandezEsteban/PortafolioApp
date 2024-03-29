import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { ProductComponent } from './pages/product/product.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [

  {path:'home',component:PortafolioComponent},
  {path:'about',component:AboutComponent},
  {path:'producto/:productoId',component:ProductComponent},
  {path:'search/:termino',component:SearchComponent},
  {path:'**', pathMatch:'full', redirectTo:'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
