/**
 * Created by 206-025 on 2017-04-27.
 */
import { CARPARTS } from '../car-parts/mocks';
import { Injectable } from '@angular/core';
import {CarPart} from "../car-parts/car-part";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RacingDataService {

    constructor( private http: Http) { }

    getCarParts() {
        //return CARPARTS;
        return this.http.get("app/car-parts/car-parts.json")
            .map(response => <CarPart[]>response.json().data);
    }

    addCarPart(carPart: CarPart) {
        CARPARTS.push(carPart);
        return this.getCarParts();
    }
}