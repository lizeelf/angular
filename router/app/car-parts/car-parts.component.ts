/**
 * Created by 206-025 on 2017-04-25.
 */
import { Component } from '@angular/core';
import {CarPart} from "./car-part";
import {RacingDataService} from "../service/racing-data.service";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'car-parts',
    templateUrl: 'app/car-parts/car-parts.component.html',
    styleUrls: [ 'app/car-parts/car-parts.component.css' ]
})
export class CarPartsComponent {

    carParts: CarPart[] = [];
    observer: Observable<CarPart[]>;

    constructor( private racingDataService: RacingDataService ) { }

    ngOnInit() {
        //this.carParts = this.racingDataService.getCarParts();
        this.observer = this.racingDataService.getCarParts(); //데이터를 가져오기 전에 Ready 상태
        this.observer.subscribe((carParts) => {
            this.carParts = carParts;

            (function(carParts, func) {
                setTimeout(function() { func(carParts) }, 5000);
            })(this.carParts, this.changeImage);
        }); //이떄 데이터를 가져옴


    }


    totalCarParts(): number {
        /*
         let sum: number = 0;
         for (let carPart of this.carParts) {
         sum += carPart.inStock;
         }
         return sum;
         */
        //return this.carParts.reduce(function (prev, current) { return prev + current.inStock; }, 0);
        return this.carParts.reduce((prev, current) => prev + current.inStock, 0);
    }

    changeImage(carParts) {


            carParts[0].image = 'https://t1.daumcdn.net/daumtop_chanel/op/20170315064553027.png';


    }

    upQuantity(carPart) {
        if (carPart.quantity < carPart.inStock) { carPart.quantity++; }
    }

    downQuantity(carPart) {
        if (carPart.quantity > 0) { carPart.quantity--; }
    }

    search(stockValue) {
        this.carParts = this.carParts.filter( carPart => carPart.inStock >= stockValue );
    }

    addCarPart() {
        let carPart: CarPart = {
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
    }
}