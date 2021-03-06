"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by 206-025 on 2017-04-27.
 */
var mocks_1 = require("../car-parts/mocks");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var RacingDataService = (function () {
    function RacingDataService(http) {
        this.http = http;
    }
    RacingDataService.prototype.getCarParts = function () {
        //return CARPARTS;
        return this.http.get("app/car-parts/car-parts.json")
            .map(function (response) { return response.json().data; });
    };
    RacingDataService.prototype.addCarPart = function (carPart) {
        mocks_1.CARPARTS.push(carPart);
        return this.getCarParts();
    };
    return RacingDataService;
}());
RacingDataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], RacingDataService);
exports.RacingDataService = RacingDataService;
//# sourceMappingURL=racing-data.service.js.map