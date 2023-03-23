import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EjempComponent } from './components/ejemp/ejemp.component';

const routes: Routes = [
  {
    path:'', pathMatch:'full', redirectTo: 'home'
  },
  {
    path:'home', component: HomeComponent,
    children:[
      {
        path:'onchange', component: EjempComponent
      }

    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
