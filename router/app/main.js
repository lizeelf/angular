"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var platform_browser_1 = require("@angular/platform-browser");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var mydate_pipe_1 = require("./custom/pipe/mydate.pipe");
var app_component_1 = require("./app.component");
var car_parts_component_1 = require("./car-parts/car-parts.component");
var footer_module_1 = require("./footer/footer.module");
var racing_data_service_1 = require("./service/racing-data.service");
var app_routes_1 = require("./app.routes");
var about_component_1 = require("./about/about.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [app_component_1.AppComponent, about_component_1.AboutComponent, car_parts_component_1.CarPartsComponent, mydate_pipe_1.MyDatePipe],
        imports: [platform_browser_1.BrowserModule, footer_module_1.FooterModule, forms_1.FormsModule, http_1.HttpModule, app_routes_1.AppRoutingModule],
        bootstrap: [app_component_1.AppComponent],
        providers: [racing_data_service_1.RacingDataService]
    })
], AppModule);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=main.js.map