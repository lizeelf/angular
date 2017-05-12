/**
 * Created by 206-025 on 2017-04-26.
 */
import { NgModule } from '@angular/core';
import {FooterComponent} from './footer.component';
import {AddressDataComponent} from "./address-data.component";
import {CopyrightComponent} from "./copyright.component";

@NgModule({
    declarations : [ FooterComponent, AddressDataComponent, CopyrightComponent ],
    exports: [ FooterComponent ]
})
export class FooterModule {

}