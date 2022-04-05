import { __decorate } from "tslib";
import { Component } from '@angular/core';
let BubbleComponent = class BubbleComponent {
    constructor() {
        this.view = [900, 400];
        this.bubbleData = [
            {
                name: 'Germany',
                series: [
                    {
                        name: '2010',
                        x: '2010',
                        y: 80.3,
                        r: 80.4
                    },
                    {
                        name: '2000',
                        x: '2000',
                        y: 80.3,
                        r: 78
                    },
                    {
                        name: '1990',
                        x: '1990',
                        y: 75.4,
                        r: 79
                    }
                ]
            },
            {
                name: 'United States',
                series: [
                    {
                        name: '2010',
                        x: '2010',
                        y: 78.8,
                        r: 310
                    },
                    {
                        name: '2000',
                        x: '2000',
                        y: 76.9,
                        r: 283
                    },
                    {
                        name: '1990',
                        x: '1990',
                        y: 75.4,
                        r: 253
                    }
                ]
            },
            {
                name: 'France',
                series: [
                    {
                        name: '2010',
                        x: '2010',
                        y: 81.4,
                        r: 63
                    },
                    {
                        name: '2000',
                        x: '2000',
                        y: 79.1,
                        r: 59.4
                    },
                    {
                        name: '1990',
                        x: '1990',
                        y: 77.2,
                        r: 56.9
                    }
                ]
            },
            {
                name: 'United Kingdom',
                series: [
                    {
                        name: '2010',
                        x: '2010',
                        y: 80.2,
                        r: 62.7
                    },
                    {
                        name: '2000',
                        x: '2000',
                        y: 77.8,
                        r: 58.9
                    },
                    {
                        name: '1990',
                        x: '1990',
                        y: 75.7,
                        r: 57.1
                    }
                ]
            }
        ];
        // options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = true;
        this.showXAxisLabel = true;
        this.yAxisLabel = 'Population';
        this.showYAxisLabel = true;
        this.xAxisLabel = 'Years';
        this.maxRadius = 20;
        this.minRadius = 5;
        this.yScaleMin = 70;
        this.yScaleMax = 85;
        this.colorScheme = {
            domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
        };
        //Object.assign(this, { bubbleData });
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
BubbleComponent = __decorate([
    Component({
        selector: 'app-bubble',
        templateUrl: './bubble.component.html'
    })
], BubbleComponent);
export { BubbleComponent };
//# sourceMappingURL=bubble.component.js.map