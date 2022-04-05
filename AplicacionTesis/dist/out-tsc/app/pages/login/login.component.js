import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
//import Swal from 'sweetalert2';
import Swal from 'sweetalert2';
let LoginComponent = class LoginComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.usuario = new UsuarioModel();
        this.recordarme = false;
    }
    ngOnInit() {
        if (localStorage.getItem('email')) {
            this.usuario.email = String(localStorage.getItem('email'));
            //this.usuario.email = localStorage.getItem('email');
            this.recordarme = true;
        }
    }
    login(form) {
        if (form.invalid) {
            return;
        }
        /* Swal.fire({
          allowOutsideClick: false,
          type: 'info',
          text: 'Espere por favor...'
        }); */
        Swal.fire('Good job!', 'Espere por favor...', 'info');
        Swal.showLoading();
        this.auth.login(this.usuario)
            .subscribe(resp => {
            console.log(resp);
            Swal.close();
            if (this.recordarme) {
                localStorage.setItem('email', this.usuario.email);
            }
            this.router.navigateByUrl('/home');
        }, (err) => {
            console.log(err.error.error.message);
            /* Swal.fire({
              'error',
              'Error al autenticar',
              err.error.error.message
            }); */
            Swal.fire('Error', 'Error al autenticar', err.error.error.message);
        });
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html'
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map