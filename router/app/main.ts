
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { MyDatePipe } from './custom/pipe/mydate.pipe';
import { AppComponent } from './app.component';
import { CarPartsComponent } from './car-parts/car-parts.component';
import {FooterModule} from "./footer/footer.module";
import {RacingDataService} from "./service/racing-data.service";
import {AppRoutingModule} from "./app.routes";
import {AboutComponent} from "./about/about.component";

@NgModule({
    declarations: [ AppComponent, AboutComponent, CarPartsComponent, MyDatePipe ],
    imports: [ BrowserModule, FooterModule, FormsModule, HttpModule, AppRoutingModule ],
    bootstrap: [ AppComponent ],   //처음 들어올때 보여줄 컴포넌트 (main 페이지만 작성)
    providers: [ RacingDataService ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);