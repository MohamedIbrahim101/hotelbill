import { Component } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bill2';
  time:any = '';
  TABLENO:any= [];
  // Date = Date.now();
  LocalDate : string = new Date().toLocaleString();
  constructor() { }

  ngOnInit(): void {
  
    this.startClock();
  }
 startClock(){
  interval(1).subscribe(data=>{
    this.LocalDate = Date();
  })
 }
}
