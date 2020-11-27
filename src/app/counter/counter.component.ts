import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count: number;
  deleteButtonVisibility: boolean;
  @ViewChild('deleteButton') deleteButton: ElementRef<HTMLButtonElement>;

  constructor() {
    this.count = 0;
    this.deleteButtonVisibility = true;
  }

  ngOnInit(): void {
  }

  increaseCount(): void {
    this.count++;
    if (this.count >= 0) {
      this.deleteButtonVisibility = true;
    }
  }

  decreaseCount(): void {
    this.count--;
    if (this.count < 0) {
      this.deleteButtonVisibility = false;
    }
  }

}
