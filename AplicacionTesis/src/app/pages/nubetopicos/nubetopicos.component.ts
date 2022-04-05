import {Component, Input, OnInit} from '@angular/core';
import {CloudData, CloudOptions} from "angular-tag-cloud-module";
@Component({
  selector: 'app-nubetopicos',
  templateUrl: './nubetopicos.component.html'
})
export class NubetopicosComponent {
  @Input() nube:any[] = [];
  data: CloudData[] =[]
  bandera:boolean = false;
  options: CloudOptions = {
    width: 1,
    height: 500,
    overflow: false,
    strict: false,
    realignOnResize: false,
    randomizeAngle: false,
    step: 5,
    log: 'debug',
    delay: 50,
  };

  ngOnInit(){
  }

  generarLetra(){
      var letras = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
      var numero = (Math.random()*15).toFixed(0);
      return letras[parseInt(numero)];
  }

   colorHEX(){
      var coolor = "";
      for(var i=0;i<6;i++){
        coolor = coolor + this.generarLetra();
      }
      return "#" + coolor;
    }

    generarNube(){
    this.bandera = true
     for (let frases of this.nube){
       let arrayPalabras:[] = frases.split(" ");
       for(let palabra of arrayPalabras){
         let palabraAñadir = {
           "text": palabra,
           "weight": 2,
           "color": this.colorHEX(),
           "external": false,
           "rotate": 0
         }
         this.data.push(palabraAñadir)
       }
     }
   }
}
