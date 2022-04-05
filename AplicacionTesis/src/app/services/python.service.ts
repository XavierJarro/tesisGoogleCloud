import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PythonService {
  //private url = 'http://10.182.0.2:3000';
  private url = 'http://34.125.56.196:8080';

  //userToken: string;

  constructor( private http: HttpClient ) {
    //this.leerToken();
  }

  extraerWS(idTwitter:string,idFacebook:string, candidato: string ) {

    const data = {
      idTwitter:`${idTwitter}`,
      idFacebook:`${idFacebook}`,
      candidato:` ${candidato}`
    };

    return this.http.post(
      `${ this.url }/extraer`,
      data
    ).pipe(
      map( resp => {
        return resp;
      })
    );
  }

  analizarrWS( candidato: string, cantidad:string ) {

    const data = {
      candidato:` ${candidato}`,
      cantidad:` ${cantidad}`
    };

    return this.http.post(
      `${ this.url }/analizar`,
      data
    ).pipe(
      map( resp => {
        return resp;
      })
    );
  }

  obtenerCandidatosWs() {
    const data = {
      candidato:' '
    };
    return this.http.post(
      `${ this.url }/candidatos`,
      data
    ).pipe(
      map( resp => {
        return resp;
      })
    );
  }




}
