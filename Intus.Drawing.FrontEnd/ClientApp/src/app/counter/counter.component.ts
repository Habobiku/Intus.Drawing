import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterPage {
  public currentCount = 0;

  public incrementCounter() {
    this.currentCount++;
  }
}

