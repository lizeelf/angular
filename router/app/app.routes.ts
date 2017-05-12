/**
 * Created by 206-025 on 2017-04-28.
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { CarPartsComponent } from "./car-parts/car-parts.component";

export const routes: Routes = [
    {path: '', component: AboutComponent },
    {path: 'carpart', component: CarPartsComponent }
];
export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);