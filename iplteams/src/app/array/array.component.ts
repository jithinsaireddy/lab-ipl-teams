import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css'],
})
export class ArrayComponent implements OnInit {
  ipl: any;
  constructor() {
    this.ipl = [
      {
        name: 'Chennai Super kings',
        website: 'https://chennaisuperkings.com/',
        phonenumber: '965-144-6018',
        image: '../assets/csk2.png',
      },
      {
        name: 'Mumbai indians',
        website: 'https://www.mumbaiIndians.com/',
        phonenumber: '989-0929-3939',
        image: '../assets/MI2.png',
      },
      {
        name: 'Rajasthan Royals',
        website: 'https://www.rajastharoyals.com/',
        phonenumber: '9198920-00',
        image: '../assets/RR1.png',
      },
      {
        name: 'Delhi capitals',
        website: 'https://www.delhicapitals.com/',
        phonenumber: '9198920-09-098',
        image: '../assets/Delhi1.png',
      },
      {
        name: 'Royal challengers Bangalore',
        website: 'htts://www.royalchallengersBangalore.com/',
        phonenumber: '9198920',
        image: '../assets/RCB2.png',
      },
      {
        name: 'Kolkatha knight riders',
        website: 'https://www.kokathanightriders.com',
        phonenumber: '9198920',
        image: '../assets/KKR1.png',
      },
      {
        name: 'Kings X1 Punjab',
        website: 'https://www.kingsX1punjab.com',
        phonenumber: '9198920',
        image: '../assets/KXI1.png',
      },
      {
        name: 'Sunriseses',
        website: 'https://www.suniseses.com',
        phonenumber: '9198920',
        image: '../assets/SRH1.png',
      },
    ];
  }

  ngOnInit(): void {}
}
