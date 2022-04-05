import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let LineComponent = class LineComponent {
    constructor() {
        this.lineas = [];
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
        this.xAxisLabel = 'Year';
        this.yAxisLabel = 'Population';
        this.timeline = true;
        this.colorScheme = {
            domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
        };
        //Object.assign(this, { multi });
    }
    onSelect(data) {
        //console.log('Item clicked', JSON.parse(JSON.stringify(data)));
        //console.log('Lineas ', this.lineas);
    }
    onActivate(data) {
        //console.log('Activate', JSON.parse(JSON.stringify(data)));
    }
    onDeactivate(data) {
        //console.log('Deactivate', JSON.parse(JSON.stringify(data)));
    }
};
__decorate([
    Input()
], LineComponent.prototype, "lineas", void 0);
LineComponent = __decorate([
    Component({
        selector: 'app-line',
        templateUrl: './line.component.html'
    })
], LineComponent);
export { LineComponent };
//# sourceMappingURL=line.component.js.map