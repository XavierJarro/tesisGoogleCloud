import { __decorate } from "tslib";
//import { Component, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';
let DatosComponent = class DatosComponent {
    constructor(activatedRoute, python, router, sanitizer) {
        this.activatedRoute = activatedRoute;
        this.python = python;
        this.router = router;
        this.sanitizer = sanitizer;
        this.candidato = '';
        this.datos = [];
        this.imagen = "";
        this.url = "http://127.0.0.1:3000/";
    }
    ngOnInit() {
        this.candidato = String(this.activatedRoute.snapshot.paramMap.get('candidato'));
        console.log('Datos: ', this.candidato);
        Swal.fire('Cargando ...', 'Se esta analizando los datos del candidato', 'info');
        Swal.showLoading();
        this.python.analizarrWS(this.candidato).subscribe((res) => {
            Swal.close();
            console.log(res);
            let tokenStr = JSON.stringify(res);
            let tokenJson = JSON.parse(tokenStr);
            this.datos = tokenJson.comentarios;
            console.log('texto', tokenJson.mensaje);
            console.log('datos ', tokenJson.comentarios);
        }, (err) => {
            console.log(err);
            Swal.fire('No se pudo realizar el analisis', err.message, 'error');
            this.router.navigateByUrl('/analisis');
        });
        /* this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
        
        
        this.python.obtenerImagenWS(this.candidato).subscribe(
          (res:any) =>{
            let tokenStr = JSON.stringify(res);
            let tokenJson=JSON.parse(tokenStr);
            this.source = 'data:image/png;base64,'+tokenJson.ImageBytes;
            console.log('texto', this.source);
            this.imgSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.source);
    
          }
          , (err) => {
            console.log(err);
          }
        ); */
    }
};
DatosComponent = __decorate([
    Component({
        selector: 'app-datos',
        templateUrl: './datos.component.html',
        styleUrls: ['./datos.component.css'],
    })
], DatosComponent);
export { DatosComponent };
//# sourceMappingURL=datos.component.js.map