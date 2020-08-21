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
    new Quote("From you believe, so you shall achieve", 'Me', 'Admin', new Date(2018, 4, 27, 23, 1), 0, 0),
    new Quote('Life is what You make it', 'Vybz kartel', 'Me', new Date(2018, 4, 27, 23, 5), 0, 0),
    new Quote('Its always the nizzle my Shizzle', 'Snoop Dogg', 'Main Moi', new Date(2018, 4, 27, 23, 8), 0, 0),
    new Quote('Its always the nizzle my Shizzle', 'Snoop Dogg', 'Main Moi', new Date(2018, 4, 27, 23, 8), 0, 0),
    new Quote('Its always the nizzle my Shizzle', 'Snoop Dogg', 'Main Moi', new Date(2018, 4, 27, 23, 8), 0, 0),
    new Quote('Siwezi Wacha Vela', 'Zzero Sufuri', 'Ombitho', new Date(2018, 4, 28, 7, 42), 0, 0)
  ];

  // constructor() { }

  ngOnInit(): void {
  }

}
