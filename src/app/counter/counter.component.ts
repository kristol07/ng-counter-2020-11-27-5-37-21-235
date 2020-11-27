import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count: number;
  decreaseButtonVisibility: boolean;
  increaseButtonVisibility: boolean;
  textLabelColor: string;

  test = () => this.count < 0;

  constructor() {
    this.count = 0;
    this.doCheck();
  }

  ngOnInit(): void {
  }

  increaseCount(): void {
    this.count++;
    this.doCheck();
  }

  reset(): void {
    this.count = 0;
    this.doCheck();
  }

  decreaseCount(): void {
    this.count--;
    this.doCheck();
  }

  checkButtonVisibility(): void {
    if (this.count < 0) {
      this.decreaseButtonVisibility = false;
    }
    else if (this.count > 10) {
      this.increaseButtonVisibility = false;
    }
    else {
      this.increaseButtonVisibility = true;
      this.decreaseButtonVisibility = true;
    }
  }

  checkTextColor(): void {
    if (this.count < 0) {
      this.textLabelColor = 'green';
    }
    else if (this.count > 10) {
      this.textLabelColor = 'red';
    }
    else {
      this.textLabelColor = 'white';
    }
  }

  doCheck(): void {
    this.checkTextColor();
    this.checkButtonVisibility();
  }

}
