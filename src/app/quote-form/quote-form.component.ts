import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  // var today = new Date();
  // var date = today.+'-'+(today.getMonth()+1)+'-'+today.getDate();
  // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  // var dateTime = date+' '+time;

  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote(){
this.addQuote.emit(this.newQuote);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
