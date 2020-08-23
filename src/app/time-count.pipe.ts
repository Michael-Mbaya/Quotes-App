import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeCount'
})
export class TimeCountPipe implements PipeTransform {

  transform(value: any): any {
    let today:Date = new Date(); //get current date and time
    let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    let dateDifference = Math.abs(value - todayWithNoTime) //returns value in miliseconds

    const secondsInDay = 86400; //60 seconds * 60 minutes in an hour * 24 hours in a day
    const secondsInHour = 3600; //60 sec * 60 min(1hr)
    const secondsInMinute = 60; //self-explanatory ==> 60secs make a min
    let secondsInMonth = (secondsInDay*30);   //since average of 30 days is a month
    let secondsInYear = (secondsInMonth*12);  //since 12 months equals a year

    let dateDifferenceSeconds = dateDifference*0.001; //converts miliseconds to seconds
    let daysCounter = Math.floor(dateDifferenceSeconds/secondsInDay);
        //Math.floor() to round down to nearest integer value (no decimals) or
        //Math.trunc() to display only integer part of decimal numbers 
    let hoursCounter = Math.floor(dateDifferenceSeconds/secondsInHour);
    let minutesCounter = Math.floor(dateDifferenceSeconds/secondsInMinute);
    let monthCounter = Math.floor(dateDifferenceSeconds/secondsInMonth);
    let yearCounter = Math.floor(dateDifferenceSeconds/secondsInYear);
    

    if(daysCounter > 1 && value > todayWithNoTime){
      return (daysCounter+" days ahead");
    }
    else if (minutesCounter<=1){
      return("A few seconds ago")
    }
    else if (minutesCounter>=1 && minutesCounter<2){
      return(minutesCounter+" minute ago")
    }
    else if (minutesCounter>1 && minutesCounter<60){
      return(minutesCounter+ " minutes ago")
    }
    else if (hoursCounter>=1 && hoursCounter<2){
      return(hoursCounter+ " hour ago")
    }
    else if (hoursCounter>1 && hoursCounter<24){
      return(hoursCounter+ " hours ago")
    }
    else if (daysCounter <= 1){
      return (daysCounter+" day ago");
    }
    else if (daysCounter > 1 && daysCounter<7){
      return (daysCounter+" days ago");
    }
    else if (daysCounter >=7 && daysCounter<14){
      return ("A week "+"ago");
    }
    else if (daysCounter >14 && daysCounter<=30){
      return (daysCounter +" days ago");
    }
    else if (daysCounter >30 && daysCounter<60){
      return ("A Month ago");
    }
    else if (monthCounter>=1 && monthCounter<2){
      return ("A Month ago");
    }
    else if (monthCounter>=2 && monthCounter<12){
      return (monthCounter+" Months ago");
    }
    else if (yearCounter<2){
      return (yearCounter+" Year ago");
    }
    else if (yearCounter>=2){
      return (yearCounter+" Years ago");
    }

  }

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

}
