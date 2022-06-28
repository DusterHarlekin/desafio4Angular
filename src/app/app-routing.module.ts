import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {path:'inicio', component: HeaderComponent},
  {path: 'producto/:id', component: DescripcionComponent},
  {path: '', redirectTo: 'inicio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
