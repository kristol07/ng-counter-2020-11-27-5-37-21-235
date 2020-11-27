import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count: number;
  deleteButtonVisibility: boolean;
  increaseButtonVisibility: boolean;

  constructor() {
    this.count = 0;
    this.deleteButtonVisibility = true;
    this.increaseButtonVisibility = true;
  }

  ngOnInit(): void {
  }

  increaseCount(): void {
    this.count++;
    if (this.count >= 0) {
      this.deleteButtonVisibility = true;
      if (this.count > 10) {
        this.increaseButtonVisibility = false;
      }
    }
  }

  decreaseCount(): void {
    this.count--;
    if (this.count < 0) {
      this.deleteButtonVisibility = false;
    }
  }

}
