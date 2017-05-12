
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


@Component({
    selector: 'my-app',
    template: '<h1>Hello Angular</h1>'
})
class AppComponent { }

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule ],
    bootstrap: [ AppComponent ]   //처음 들어올때 보여줄 컴포넌트 (main 페이지만 작성)
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
