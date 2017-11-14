import { Component } from '@angular/core';
import { DataService } from './data.service';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({     // This is the 'Component Decorator' - defined by the '@' symbol.
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('myTriggerAnimation', [
      state('small', style({
        transform: 'scale(1)'
      })),
      state('large', style({
        transform: 'scale(1.2)'
      })),
      transition('small <=> large', animate('300ms ease-in', keyframes([
        style({opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
        style({opacity: 1, transform: 'translateY(35px)', offset: .5 }),
        style({opacity: 1, transform: 'translateY(0)', offset: 1 }),
      ]))),
    ]),
  ],
})

export class AppComponent {    // This is our 'Component Class'
  
  state: string = 'small'

  constructor(public dataService:DataService) {

  }

  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small');  
  }

  //someProperty:string = '';

  ngOnInit() {
     return this.dataService.cars;

    //this.someProperty = this.dataService.myData();
  }

  title = "My Test App";
  buttonStatus = 'disabled';
  myArray = ['farts', 'hearts', 'toots'];

  titleClass = false;
  titleClasses = {
    'main-title': true,
    'large-title': true
  }

  titleStyle = false;

  titleStyles = {
    'color': 'red',
    'font-size': '1em'  
  }

  myEvent(event) {
    console.log(event);
  }
}
