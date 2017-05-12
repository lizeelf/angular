"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var about_component_1 = require("./about/about.component");
var car_parts_component_1 = require("./car-parts/car-parts.component");
exports.routes = [
    { path: '', component: about_component_1.AboutComponent },
    { path: 'carpart', component: car_parts_component_1.CarPartsComponent }
];
exports.AppRoutingModule = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map