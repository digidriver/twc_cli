import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    name: string;
    blurb: string;
    blurbTm: string;
    blurb2: string;
    product: string;
    productTm: string;
    teaserDate: string;

    constructor() {
        this.name = 'Angular 2';
        this.blurb = 'A brand new addition to the On The Go';
        this.blurbTm = 'TM';
        this.blurb2 = ' suite of available products is coming soon:';
        this.product = 'Profile Control';
        this.productTm = 'TM';
        this.teaserDate = " - Coming Fall 2017";
    }
}
