import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let BarComponent = class BarComponent {
    constructor() {
        this.bars = [];
        this.view = [1000, 600];
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
            }
        ];
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Tipo de comentario';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Comentarios';
    }
    onSelect(event) {
        console.log(event);
    }
};
__decorate([
    Input()
], BarComponent.prototype, "bars", void 0);
BarComponent = __decorate([
    Component({
        selector: 'app-bar',
        templateUrl: './bar.component.html'
    })
], BarComponent);
export { BarComponent };
//# sourceMappingURL=bar.component.js.map