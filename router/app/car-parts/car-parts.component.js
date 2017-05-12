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
 * Created by 206-025 on 2017-04-25.
 */
var core_1 = require("@angular/core");
var racing_data_service_1 = require("../service/racing-data.service");
var CarPartsComponent = (function () {
    function CarPartsComponent(racingDataService) {
        this.racingDataService = racingDataService;
        this.carParts = [];
    }
    CarPartsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.carParts = this.racingDataService.getCarParts();
        this.observer = this.racingDataService.getCarParts(); //데이터를 가져오기 전에 Ready 상태
        this.observer.subscribe(function (carParts) {
            _this.carParts = carParts;
            (function (carParts, func) {
                setTimeout(function () { func(carParts); }, 5000);
            })(_this.carParts, _this.changeImage);
        }); //이떄 데이터를 가져옴
    };
    CarPartsComponent.prototype.totalCarParts = function () {
        /*
         let sum: number = 0;
         for (let carPart of this.carParts) {
         sum += carPart.inStock;
         }
         return sum;
         */
        //return this.carParts.reduce(function (prev, current) { return prev + current.inStock; }, 0);
        return this.carParts.reduce(function (prev, current) { return prev + current.inStock; }, 0);
    };
    CarPartsComponent.prototype.changeImage = function (carParts) {
        carParts[0].image = 'https://t1.daumcdn.net/daumtop_chanel/op/20170315064553027.png';
    };
    CarPartsComponent.prototype.upQuantity = function (carPart) {
        if (carPart.quantity < carPart.inStock) {
            carPart.quantity++;
        }
    };
    CarPartsComponent.prototype.downQuantity = function (carPart) {
        if (carPart.quantity > 0) {
            carPart.quantity--;
        }
    };
    CarPartsComponent.prototype.search = function (stockValue) {
        this.carParts = this.carParts.filter(function (carPart) { return carPart.inStock >= stockValue; });
    };
    CarPartsComponent.prototype.addCarPart = function () {
        var carPart = {
            id: 4,
            name: 'Power handle',
            description: 'This handle are the very best.',
            inStock: 70,
            price: 44.99,
            image: '/images/tires.jpg',
            featured: false,
            quantity: 0
        };
        //this.carParts = this.racingDataService.addCarPart(carPart);
    };
    return CarPartsComponent;
}());
CarPartsComponent = __decorate([
    core_1.Component({
        selector: 'car-parts',
        templateUrl: 'app/car-parts/car-parts.component.html',
        styleUrls: ['app/car-parts/car-parts.component.css']
    }),
    __metadata("design:paramtypes", [racing_data_service_1.RacingDataService])
], CarPartsComponent);
exports.CarPartsComponent = CarPartsComponent;
//# sourceMappingURL=car-parts.component.js.map