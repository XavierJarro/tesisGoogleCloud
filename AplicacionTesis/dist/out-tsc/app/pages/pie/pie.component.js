import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let PieComponent = class PieComponent {
    constructor() {
        this.view = [900, 400];
        this.pies = [];
        // options
        this.gradient = true;
        this.showLegend = true;
        this.showLabels = true;
        this.isDoughnut = false;
        this.colorScheme = {
            domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
        };
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
                "value": 6200000
            }
        ];
        //Object.assign(this, { single });
    }
    onSelect(data) {
        console.log('Item clicked', JSON.parse(JSON.stringify(data)));
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
], PieComponent.prototype, "pies", void 0);
PieComponent = __decorate([
    Component({
        selector: 'app-pie',
        templateUrl: './pie.component.html'
    })
], PieComponent);
export { PieComponent };
//# sourceMappingURL=pie.component.js.map