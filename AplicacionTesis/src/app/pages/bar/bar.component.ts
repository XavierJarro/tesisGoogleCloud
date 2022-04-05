import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html'
})
export class BarComponent{


  @Input() bars :any[] =[];

  view: [number,number] = [700, 500];


  single = [
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    },
    {
      "name": "France",
      "value": 7200000
    }
  ];

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Tipo de comentario';
  showYAxisLabel = true;
  yAxisLabel = 'Comentarios';

  constructor() {
  }

  onSelect(event:any) {
    console.log(event);
  }


}
