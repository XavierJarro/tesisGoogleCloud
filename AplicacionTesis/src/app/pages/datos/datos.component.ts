//import { Component, OnInit } from '@angular/core';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { PythonService } from '../../services/python.service';
import Swal from 'sweetalert2';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Observable, Subscriber } from 'rxjs';
import {CloudData, CloudOptions} from "angular-tag-cloud-module";
import {NgxPaginationModule} from "ngx-pagination";

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css'],
})
export class DatosComponent implements OnInit{
  candidato:string='';
  cantidad:string='';
  sentimiento:string = '';
  datos:any[]=[];
  numPositivosNegativos:any[]=[];
  palabrasTopicos:any[]=[];
  sentimientosTopicos:any[]=[];
  titulos:any[]=["Seleccione un topico"];
  titulosTopicos:any[]=[]
  lista=new Array();
  selected: string = '';
  imagen:boolean = false;
  visualizacion:boolean = false
  verInformacion:boolean = false
  verInformacionTopicos:boolean = false
  myimage!: Observable<any>;
  //url: string = "http://10.182.0.2:3000/";
  url: string = "http://34.125.56.196:8080/";  
  numeros:number = 0;
  letras:[]=[];
  urlSafe!: SafeResourceUrl;
  imgSafe!:SafeResourceUrl;
  source!:any;
  data: CloudData[] =[]
  data2: CloudData[] =[]
  options: CloudOptions = {
    width: 0.60,
    height: 400,
    overflow: false,
    strict: false,
    realignOnResize: true,
    randomizeAngle: true,
    zoomOnHover: {
      scale: 1.2,
      transitionTime: 0.6,
      delay: 0.1,
      color: '#33bb33',
    },
    step: 5,
    log: 'debug',
    delay: 50,
  };
  topicos:any[]=[];
  palabraClave:any[]=[];
  comentarios:any[]=[];
  comentariosTopicoSeleccionado:any[]=[];
  comentariosNegativosTopicoSeleccionado:any[]=[];
  comentariosPositivosTopicoSeleccionado:any[]=[];
  sentimientosComentarios:any[]=[];
  public page!:number;

  constructor( private activatedRoute:ActivatedRoute,
    private python: PythonService,
    private router:Router,
    public sanitizer: DomSanitizer) { }

  ngOnInit(){
    for (var _i = 0; _i < 10; _i++) {
      this.lista[_i]=["topico "+(_i+1)];
    }
    this.candidato=String(this.activatedRoute.snapshot.paramMap.get('candidato'));
    this.cantidad=String(this.activatedRoute.snapshot.paramMap.get('cantidad'));
    console.log('Datos: ', this.candidato);
    Swal.fire(
      'Cargando ...',
      'Se esta analizando los datos del candidato',
      'info'
    );
    Swal.showLoading();
    this.python.analizarrWS(this.candidato,this.cantidad).subscribe(
      (res:any) =>{
        Swal.close();
        console.log(res);
        let tokenStr = JSON.stringify(res);
        let tokenJson=JSON.parse(tokenStr);
        this.datos=tokenJson.comentarios;//cuantos topicos positivos y negativos hay grafica principal
        this.palabrasTopicos = tokenJson.texto;//palabras clave de todos los topicos
        this.titulosTopicos = tokenJson.topicos;// topicos
        this.sentimientosTopicos = tokenJson.sentimientos;// sentimientos de cada topico
        this.topicos=tokenJson.topicoComentario;// a que topico pertenece el comentario
        //this.palabraClave=tokenJson.palabrasClave;
        this.comentarios=tokenJson.comentariosTexto;// el texto de cada comentario
        this.sentimientosComentarios = tokenJson.sentimientoComentario;// el sentimiento de cada comentrio
        this.titulos = this.titulos.concat(this.titulosTopicos);
      }
      , (err) => {

        console.log(err);
        Swal.fire(
          'No se pudo realizar el analisis',
          err.message,
          'error'
        )
        this.router.navigateByUrl('/analisis');
      }
    );
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
  cargarTopicos(){
    this.verInformacion = true
    this.comentariosPositivosTopicoSeleccionado = [];
    this.comentariosNegativosTopicoSeleccionado = [];
    this.imagen = false;
    this.visualizacion = false;
    this.data2 =[];
    for (let i: number = 0 ; i<this.titulosTopicos.length; i++){
      if (this.titulosTopicos[i]==this.selected && this.titulosTopicos.includes(this.selected)){
        this.imagen= true;
        this.visualizacion = true;
        console.log(i);
        console.log(this.titulos[i]);
        console.log(this.sentimientosTopicos[i]);
        console.log(this.palabrasTopicos[i]);
        let arrayPalabras:[] = this.palabrasTopicos[i].split(" ");
        for(let palabra of arrayPalabras){
          let palabraAñadir = {
            "text": palabra,
            "weight": 2,
           "color": this.colorHEX(),
            "external": false,
            "rotate": 0
          }
          this.data2.push(palabraAñadir);
        }
        this.sentimiento=this.sentimientosTopicos[i];
        console.log("El sentimiento es : " , this.sentimiento);
      }
    }
    this.comentariosTopicoSeleccionado = [];
    for (let i: number = 0 ; i<this.topicos.length; i++){
      var cadena:string = "";
      cadena = "Topico "+this.topicos[i];
      if (cadena==this.selected){
        if(this.comentarios[i]){
           //this.comentariosTopicoSeleccionado.push( this.comentarios[i]);
           //console.log(this.sentimientosComentarios[i])
           if(this.sentimientosComentarios[i]=="positivo"){
              this.comentariosPositivosTopicoSeleccionado.push(this.comentarios[i])
           }
           if (this.sentimientosComentarios[i]=="negativo") {
             this.comentariosNegativosTopicoSeleccionado.push(this.comentarios[i])
           }
        }
      }

    }
    this.numPositivosNegativos = [
      {
        "name": "Positivos",
        "value": this.comentariosPositivosTopicoSeleccionado.length
      },
      {
        "name": "Negativos",
        "value": this.comentariosNegativosTopicoSeleccionado.length
      }
    ];
  }
  verMas(){
    console.log('entro en el if')
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
}
