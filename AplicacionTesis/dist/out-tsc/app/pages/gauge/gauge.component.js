import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let GaugeComponent = class GaugeComponent {
    constructor() {
        this.guages = [];
        this.view = [900, 400];
        this.single = [
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
                "name": "UK",
                "value": 5200000
            },
            {
                "name": "Italy",
                "value": 7700000
            },
            {
                "name": "Spain",
                "value": 4300000
            }
        ];
        this.legend = true;
        this.legendPosition = 'below';
        this.colorScheme = {
            domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
        };
        //Object.assign(this, { single });
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
__decorate([
    Input()
], GaugeComponent.prototype, "guages", void 0);
GaugeComponent = __decorate([
    Component({
        selector: 'app-gauge',
        templateUrl: './gauge.component.html'
    })
], GaugeComponent);
export { GaugeComponent };
//# sourceMappingURL=gauge.component.js.map