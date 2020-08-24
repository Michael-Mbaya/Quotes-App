import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {  Quote } from '../quote';
// import * as $ from 'jquery'; 

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
  
  @Input() quote: Quote;

  today(){
    // let d:Date = new Date();
    // return d;
let today = new Date();
let trueDateTime = new Date(today.getFullYear(),today.getMonth(),today.getDate(),today.getHours(),today.getMinutes(),today.getSeconds());
return trueDateTime
  }
  
  newQuote = new Quote("","","",this.today(),0,0);

  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote(){
this.addQuote.emit(this.newQuote);
  }

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
