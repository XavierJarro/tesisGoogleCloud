import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AnalisisComponent } from './pages/analisis/analisis.component';
import { DatosComponent } from './pages/datos/datos.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { AuthGuard } from './guards/auth.guard';
import { TutorialComponent} from "./pages/tutorial/tutorial.component";
import {FinalidadComponent} from "./pages/finalidad/finalidad.component";
import {IntroduccionComponent} from "./pages/introduccion/introduccion.component";  


const routes: Routes = [
 // { path: 'home'    , component: HomeComponent, canActivate: [ AuthGuard ] },
  { path: 'home'    , component: HomeComponent},
  { path: 'login'   , component: LoginComponent },
  { path: 'registro'   , component: RegistroComponent },
  { path: 'introduccion'    , component: IntroduccionComponent},
  { path: 'tutorial'    , component: TutorialComponent},
  { path: 'finalidad'    , component: FinalidadComponent},
  { path: 'analisis'   , component: AnalisisComponent, canActivate: [ AuthGuard ] },
  { path: 'datos/:candidato/:cantidad'   , component: DatosComponent, canActivate: [ AuthGuard ] },
  { path: '**', pathMatch:'full', redirectTo: 'home' }
];

@NgModule({
  //imports: [ RouterModule.forRoot(routes,{useHash:true} )], 
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
