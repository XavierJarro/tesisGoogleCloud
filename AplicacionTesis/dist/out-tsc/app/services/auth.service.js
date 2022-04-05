import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
let AuthService = class AuthService {
    // Crear nuevo usuario
    // https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=[API_KEY]
    // Login
    // https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=[API_KEY]
    constructor(http) {
        this.http = http;
        this.url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty';
        this.apikey = 'AIzaSyDT8Fwcm189cEg3qwOcmEyHwiQUI302JfM ';
        this.userToken = "";
        this.leerToken();
    }
    logout() {
        localStorage.removeItem('token');
    }
    login(usuario) {
        const authData = Object.assign(Object.assign({}, usuario), { returnSecureToken: true });
        return this.http.post(`${this.url}/verifyPassword?key=${this.apikey}`, authData).pipe(map(resp => {
            let tokenStr = JSON.stringify(resp);
            let tokenJson = JSON.parse(tokenStr);
            //console.log('resp[]');
            //console.log(tokenJson.idToken);
            this.guardarToken(tokenJson.idToken);
            return resp;
        }));
    }
    nuevoUsuario(usuario) {
        const authData = Object.assign(Object.assign({}, usuario), { returnSecureToken: true });
        return this.http.post(`${this.url}/signupNewUser?key=${this.apikey}`, authData).pipe(map(resp => {
            let tokenStr = JSON.stringify(resp);
            let tokenJson = JSON.parse(tokenStr);
            //console.log(tokenJson._idToken);
            //console.log(tokenJson._idToken);
            this.guardarToken(tokenJson.idToken);
            return resp;
        }));
    }
    guardarToken(idToken) {
        this.userToken = idToken;
        localStorage.setItem('token', idToken);
        let hoy = new Date();
        hoy.setSeconds(3600);
        localStorage.setItem('expira', hoy.getTime().toString());
    }
    leerToken() {
        if (localStorage.getItem('token')) {
            this.userToken = String(localStorage.getItem('token'));
        }
        else {
            this.userToken = '';
        }
        return this.userToken;
    }
    estaAutenticado() {
        if (this.userToken.length < 2) {
            return false;
        }
        const expira = Number(localStorage.getItem('expira'));
        const expiraDate = new Date();
        expiraDate.setTime(expira);
        if (expiraDate > new Date()) {
            return true;
        }
        else {
            return false;
        }
    }
};
AuthService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map