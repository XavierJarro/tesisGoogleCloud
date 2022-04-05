import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
let PythonService = class PythonService {
    //userToken: string;
    constructor(http) {
        this.http = http;
        this.url = 'http://127.0.0.1:3000';
        //this.leerToken();
    }
    extraerWS(candidato) {
        const data = {
            candidato: ` ${candidato}`
        };
        return this.http.post(`${this.url}/extraer`, data).pipe(map(resp => {
            return resp;
        }));
    }
    analizarrWS(candidato) {
        const data = {
            candidato: ` ${candidato}`
        };
        return this.http.post(`${this.url}/analizar`, data).pipe(map(resp => {
            return resp;
        }));
    }
    obtenerImagenWS(candidato) {
        const data = {
            candidato: ` ${candidato}`
        };
        return this.http.post(`${this.url}/img`, data).pipe(map(resp => {
            return resp;
        }));
    }
};
PythonService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], PythonService);
export { PythonService };
//# sourceMappingURL=python.service.js.map