import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let NumberComponent = class NumberComponent {
    constructor() {
        this.numbers = [];
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
        this.colorScheme = {
            domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
        };
        this.cardColor = '#232837';
        //Object.assign(this, { single });
    }
    onSelect(event) {
        console.log(event);
    }
};
__decorate([
    Input()
], NumberComponent.prototype, "numbers", void 0);
NumberComponent = __decorate([
    Component({
        selector: 'app-number',
        templateUrl: './number.component.html'
    })
], NumberComponent);
export { NumberComponent };
//# sourceMappingURL=number.component.js.map