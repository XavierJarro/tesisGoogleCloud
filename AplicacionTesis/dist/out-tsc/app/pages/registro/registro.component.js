import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import Swal from 'sweetalert2';
let RegistroComponent = class RegistroComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        //usuario: UsuarioModel;
        this.usuario = new UsuarioModel();
        this.recordarme = false;
    }
    ngOnInit() {
        //this.usuario = new UsuarioModel();
    }
    onSubmit(form) {
        if (form.invalid) {
            return;
        }
        Swal.fire('Good job!', 'Espere por favor...', 'info');
        Swal.showLoading();
        this.auth.nuevoUsuario(this.usuario)
            .subscribe(resp => {
            console.log(resp);
            Swal.close();
            if (this.recordarme) {
                localStorage.setItem('email', this.usuario.email);
            }
            this.router.navigateByUrl('/home');
        }, (err) => {
            console.log(err.error.error.message);
            Swal.fire('Error', 'Error al autenticar', err.error.error.message);
        });
    }
};
RegistroComponent = __decorate([
    Component({
        selector: 'app-registro',
        templateUrl: './registro.component.html',
        styleUrls: ['./registro.component.css']
    })
], RegistroComponent);
export { RegistroComponent };
//# sourceMappingURL=registro.component.js.map