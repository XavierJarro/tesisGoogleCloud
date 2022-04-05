import { __decorate } from "tslib";
/* import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component'; */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { NavbarComponent } from './pages/shared/navbar/navbar.component';
import { AnalisisComponent } from './pages/analisis/analisis.component';
import { FooterComponent } from './pages/footer/footer.component';
import { DatosComponent } from './pages/datos/datos.component';
import { LineComponent } from './pages/line/line.component';
import { PieComponent } from './pages/pie/pie.component';
import { BarComponent } from './pages/bar/bar.component';
import { HeatComponent } from './pages/heat/heat.component';
import { GaugeComponent } from './pages/gauge/gauge.component';
import { NumberComponent } from './pages/number/number.component';
import { MapComponent } from './pages/map/map.component';
import { BubbleComponent } from './pages/bubble/bubble.component';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            RegistroComponent,
            HomeComponent,
            LoginComponent,
            AboutComponent,
            NavbarComponent,
            AnalisisComponent,
            FooterComponent,
            DatosComponent,
            LineComponent,
            PieComponent,
            BarComponent,
            HeatComponent,
            GaugeComponent,
            NumberComponent,
            MapComponent,
            BubbleComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            FormsModule,
            HttpClientModule,
            BrowserAnimationsModule,
            NgxChartsModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map