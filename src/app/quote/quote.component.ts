import { Component, OnInit } from '@angular/core';
import {  Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote("If you cannot laugh at yourself then qwertyuioasdfghjkldfcvghb can't share Humor", 'Jim Carrey', 'Admin', new Date(2018, 4, 27, 23, 1), 0, 0),
    new Quote("From you believe, so you shall achieve", 'Me', 'Admin', new Date(2019, 2, 27), 0, 0),
    new Quote('Life is what You make it', 'Vybz kartel', 'Me', new Date(2020, 8, 4), 0, 0),
    new Quote('Its always the nizzle my Shizzle', 'Snoop Dogg', 'Main Moi', new Date(2020, 0, 1), 0, 0),
    new Quote('Its always the nizzle my Shizzle', 'Snoop Dogg', 'Main Moi', new Date(2020, 1, 14), 0, 0),
    new Quote('Its always the nizzle my Shizzle', 'Snoop Dogg', 'Main Moi', new Date(2015, 10, 10), 0, 0),
    new Quote('Siwezi Wacha Vela', 'Zzero Sufuri', 'Ombitho', new Date(2010, 11, 12), 0, 0)
  ];    //for dates, months counted from 0 i.e 0 is Jan to 11 is Dec

  // constructor() { }

  ngOnInit(): void {
  }

}
