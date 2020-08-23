import { Component, OnInit } from '@angular/core';
import {  Quote } from '../quote'

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  showForm:boolean = false;
  showQuoteForm(){
    this.showForm=true;
  }
  hideQuoteForm(){
    this.showForm=false;
  }

  newQuote = new Quote("","","",new Date(),0,0);

  constructor() { }

  ngOnInit(): void {
  }

}
