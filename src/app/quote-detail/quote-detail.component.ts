import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {  Quote } from '../quote';
// import * as $ from 'jquery';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();;

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  downvotes(){
    // this.quote[i]=this.quote.downvotes+1;
    this.quote.downvotes = this.quote.downvotes +1; //adds one per mouse click
  }
  upvotes(){
    this.quote.upvotes = this.quote.upvotes +1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
