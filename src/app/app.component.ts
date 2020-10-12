import { Component } from '@angular/core';
//import { timer } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 6';
  timeLeft: number = 10;
  interval;
  subscribeTimer: any;
  minutes;
  seconds;
  now;
  timep;
  timeL;
  x;
  tl;
  constructor() {
   //this.startTimer() 
   this.timep = new Date().getTime()+0.2*60000
   this.startTimer();
    }  
  
  startTimer() {
  this.x = setInterval(() => {
  this.now = new Date().getTime();
  this.timeL=this.timep - this.now; 
  //console.log(this.timeL)
  this.minutes =Math.floor((this.timeL % (1000 * 60 * 60)) / (1000 * 60));
  //console.log(this.minutes)
  this.seconds= Math.floor((this.timeL % (1000 * 60)) / 1000);
  //console.log(this.seconds)
   //console.log("0"+this.minutes + ":" + this.seconds )
  this.tl ="0"+this.minutes + ":" + this.seconds;
  if(this.tl == "00:0"){
     clearInterval(this.x)
     this.fun();
  }
  /*if (this.timeL <=0) {
    clearInterval(this.x);
    this.fun();
    } */
  },1000)
  }
  
  fun(){
    console.log("Time up")
    //clearInterval(this.interval);
  }
}
