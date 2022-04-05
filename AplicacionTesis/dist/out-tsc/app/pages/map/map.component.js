import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let MapComponent = class MapComponent {
    constructor() {
        this.maps = [];
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
                "name": "Italy",
                "value": 4500000
            },
            {
                "name": "Spain",
                "value": 5730000
            }, {
                "name": "UK",
                "value": 8200000
            }
        ];
        // options
        this.gradient = false;
        this.animations = true;
        this.colorScheme = {
            domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
        };
        // Object.assign(this, { single });
    }
    onSelect(event) {
        console.log(event);
    }
    labelFormatting(c) {
        return `${(c.label)} `;
    }
};
__decorate([
    Input()
], MapComponent.prototype, "maps", void 0);
MapComponent = __decorate([
    Component({
        selector: 'app-map',
        templateUrl: './map.component.html'
    })
], MapComponent);
export { MapComponent };
//# sourceMappingURL=map.component.js.map