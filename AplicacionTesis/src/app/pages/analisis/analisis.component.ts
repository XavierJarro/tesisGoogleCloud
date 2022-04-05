import { Component} from '@angular/core';
import { PythonService } from '../../services/python.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

//graficos

@Component({
  selector: 'app-analisis',
  templateUrl: './analisis.component.html'
})
export class AnalisisComponent{

  //datos :any[] =[];
  lista=new Array("Seleccione un candidato");
  listaCandidatos = new Array();
  selected: string = '';


  ngOnInit(){
    this.python.obtenerCandidatosWs().subscribe(
      res =>{
        console.log(res)
        let tokenStr = JSON.stringify(res);
        let tokenJson=JSON.parse(tokenStr);
        this.listaCandidatos = tokenJson.candidatos
        this.lista= this.lista.concat(this.listaCandidatos);
      }
      , (err) => {

        console.log(err.message);

      }
    );

  }

  constructor(private python: PythonService,
              private router:Router) { }

  extraer(idTwitter:string,idFacebook:string,candidato:string) {

    if (candidato && idTwitter && idFacebook) {
      console.log(candidato)
      Swal.fire(
        'Cargando ...',
        'Se esta extrayendo los datos del candidato',
        'info'
      );
      Swal.showLoading();
      this.python.extraerWS(idTwitter,idFacebook,candidato).subscribe(
        res =>{
          console.log(res)
          let resStr = JSON.stringify(res);
          let resJson=JSON.parse(resStr);
          Swal.fire(
            resJson.text,
            'Haga click en el boton para continuar!',
            'success'
          )
          window.location.reload();
        }
        , (err) => {

          console.log(err.message);
          Swal.fire(
            'Error',
            err.message,
            'error'
          )
        }
      );
    }else {
      Swal.fire(
        'Error',
          'Debe de llenar los valores faltantes del formulario',
        'error'
      )
    }



  }

  analizar(candidato:string,cantidad:string) {
    if (candidato && cantidad && this.listaCandidatos.includes(candidato))  {
      console.log(candidato) 
      console.log(cantidad)
      this.router.navigate( ['/datos',candidato,cantidad] );
      /* Swal.fire(
        'Cargando ...',
        'Se esta analizando los datos del candidato',
        'info'
      );
      Swal.showLoading();
      this.python.analizarrWS(candidato).subscribe(
        (res:any) =>{
          Swal.close();
          console.log(res)
          //this.datos=res
          this.router.navigate( ['/datos',res] );
          //this.router.navigateByUrl('/datos',res);
        }
        , (err) => {

          console.log(err);
          Swal.fire(
            'Error',
            err.message,
            'error'
          )
        }
      ); */
    } else {
      Swal.fire(
        'Error',
        'Para el analisis debe de ingresar el nombre del candidato y el numero de topicos',
        'error'
      )
    }


  }

}
