import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count: number;

  constructor() {
    this.count = 0;
  }

  ngOnInit(): void {
  }

  increaseCount(): void {
    this.count++;
  }

  decreaseCount(): void {
    this.count--;
  }

}
