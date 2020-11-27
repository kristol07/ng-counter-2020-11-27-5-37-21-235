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
  textLabelColor: string;

  constructor() {
    this.count = 0;
    this.deleteButtonVisibility = true;
    this.increaseButtonVisibility = true;
    this.textLabelColor = 'white';
  }

  ngOnInit(): void {
  }

  increaseCount(): void {
    this.count++;
    if (this.count >= 0) {
      this.deleteButtonVisibility = true;
      this.textLabelColor = 'white';
      if (this.count > 10) {
        this.increaseButtonVisibility = false;
        this.textLabelColor = 'red';
      }
    }
  }

  reset(): void {
    this.count = 0;
    this.textLabelColor = 'white';
  }

  decreaseCount(): void {
    this.count--;
    if (this.count <= 10) {
      this.increaseButtonVisibility = true;
      this.textLabelColor = 'white';
    }
    if (this.count < 0) {
      this.deleteButtonVisibility = false;
      this.textLabelColor = 'green';
    }
  }

}
