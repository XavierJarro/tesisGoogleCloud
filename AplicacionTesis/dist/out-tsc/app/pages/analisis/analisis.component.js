import { __decorate } from "tslib";
import { Component } from '@angular/core';
import Swal from 'sweetalert2';
//graficos
let AnalisisComponent = class AnalisisComponent {
    //datos :any[] =[];
    constructor(python, router) {
        this.python = python;
        this.router = router;
    }
    extraer(candidato) {
        console.log(candidato);
        Swal.fire('Cargando ...', 'Se esta extrayendo los datos del candidato', 'info');
        Swal.showLoading();
        this.python.extraerWS(candidato).subscribe(res => {
            console.log(res);
            let resStr = JSON.stringify(res);
            let resJson = JSON.parse(resStr);
            Swal.fire(resJson.text, 'Haga click en el boton para continuar!', 'success');
        }, (err) => {
            console.log(err.message);
            Swal.fire('Error', err.message, 'error');
        });
    }
    analizar(candidato) {
        console.log(candidato);
        this.router.navigate(['/datos', candidato]);
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
    }
};
AnalisisComponent = __decorate([
    Component({
        selector: 'app-analisis',
        templateUrl: './analisis.component.html'
    })
], AnalisisComponent);
export { AnalisisComponent };
//# sourceMappingURL=analisis.component.js.map