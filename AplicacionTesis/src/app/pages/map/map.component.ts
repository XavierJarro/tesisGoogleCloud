import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html'
})
export class MapComponent  {

  @Input() maps :any[] =[];

  view: [number,number] = [900, 400];

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
    },
    {
      "name": "Italy",
      "value": 4500000
    },
    {
      "name": "Spain",
      "value": 5730000
    },{
      "name": "UK",
      "value": 8200000
    }
  ];

  // options
  gradient: boolean = false;
  animations: boolean = true;
  
  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  
  constructor() {
   // Object.assign(this, { single });
  }
  
  onSelect(event:any) {
    console.log(event);
  }
  
  labelFormatting(c:any) {
    return `${(c.label)} `;
  }

}
