/**
 * Created by 206-025 on 2017-04-25.
 */
import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
    <ul class="nav navbar-nav navbar-right">
        <li> <a [routerLink]="['']">About</a> </li>
        <li> <a [routerLink]="['/carpart']">CarParts</a> </li>
    </ul>
    <router-outlet></router-outlet>
    <footer></footer>`
})
export class AppComponent {
    title : string = "Ultra Racing";
    dateStr : string = "20170425";
}