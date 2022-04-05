import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HeatComponent = class HeatComponent {
    constructor() {
        this.view = [900, 400];
        this.multi = [
            {
                "name": "Germany",
                "series": [
                    {
                        "name": "1990",
                        "value": 62000000
                    },
                    {
                        "name": "2010",
                        "value": 73000000
                    },
                    {
                        "name": "2011",
                        "value": 89400000
                    }
                ]
            },
            {
                "name": "USA",
                "series": [
                    {
                        "name": "1990",
                        "value": 250000000
                    },
                    {
                        "name": "2010",
                        "value": 309000000
                    },
                    {
                        "name": "2011",
                        "value": 311000000
                    }
                ]
            },
            {
                "name": "France",
                "series": [
                    {
                        "name": "1990",
                        "value": 58000000
                    },
                    {
                        "name": "2010",
                        "value": 50000020
                    },
                    {
                        "name": "2011",
                        "value": 58000000
                    }
                ]
            },
            {
                "name": "UK",
                "series": [
                    {
                        "name": "1990",
                        "value": 57000000
                    },
                    {
                        "name": "2010",
                        "value": 62000000
                    },
                    {
                        "name": "2011",
                        "value": 72000000
                    }
                ]
            }
        ];
        // options
        this.legend = true;
        this.showLabels = true;
        this.animations = true;
        this.xAxis = true;
        this.yAxis = true;
        this.showYAxisLabel = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Country';
        this.yAxisLabel = 'Year';
        //Object.assign(this, { multi });
    }
    onSelect(data) {
        console.log('Item clicked', JSON.parse(JSON.stringify(data)));
    }
    onActivate(data) {
        console.log('Activate', JSON.parse(JSON.stringify(data)));
    }
    onDeactivate(data) {
        console.log('Deactivate', JSON.parse(JSON.stringify(data)));
    }
};
HeatComponent = __decorate([
    Component({
        selector: 'app-heat',
        templateUrl: './heat.component.html'
    })
], HeatComponent);
export { HeatComponent };
//# sourceMappingURL=heat.component.js.map