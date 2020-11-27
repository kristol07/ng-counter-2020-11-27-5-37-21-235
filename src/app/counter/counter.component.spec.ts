import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create count when click add button', () => {
    // given
    component.count = 0;
    // when
    component.increaseCount();
    // then
    expect(component.count).toBe(1);
  });

  it('should decrease count when click minus button', () => {
    // given
    component.count = 0;
    // when
    component.decreaseCount();
    // then
    expect(component.count).toBe(-1);
  });

  it('should hide minus button when count is less than 0', () => {
    // given
    component.count = 0;
    // when
    component.decreaseCount();
    // then
    expect(component.decreaseButtonVisibility).toBeFalse();
  });

  it('should appear minus button when count is larger than or equal to 0', () => {
    // given
    component.count = -1;
    // when
    component.increaseCount();
    // then
    expect(component.decreaseButtonVisibility).toBeTrue();
  });

  it('should hide increase button when count is larger than 10', () => {
    // given
    component.count = 10;
    // when
    component.increaseCount();
    // then
    expect(component.increaseButtonVisibility).toBeFalse();
  });

  it('should appear increase button when count <= 10', () => {
    // given
    component.count = 11;
    // when
    component.decreaseCount();
    // then
    expect(component.increaseButtonVisibility).toBeTrue();
  });

  it('background color of text should change to green when count < 0', () => {
    // given
    component.count = 0;
    // when
    component.decreaseCount();
    // then
    expect(component.textLabelColor).toBe('green');
  });

  it('background color of text should change to green when count > 10', () => {
    // given
    component.count = 10;
    // when
    component.increaseCount();
    // then
    expect(component.textLabelColor).toBe('red');
  });

  it('background color of text should be white when count > 0', () => {
    // given
    component.count = 0;
    // when
    component.increaseCount();
    // then
    expect(component.textLabelColor).toBe('white');
  });

  it('background color of text should be white when count <= 10', () => {
    // given
    component.count = 11;
    // when
    component.decreaseCount();
    // then
    expect(component.textLabelColor).toBe('white');
  });

  it('number of text should be set to 0 when click reset button', () => {
    // given
    component.count = 11;
    // when
    component.reset();
    // then
    expect(component.count).toBe(0);
  });

  it('background color of text should be reset to white when reset button is clicked', () => {
    // given
    component.count = 10;
    component.increaseCount();

    // when
    component.reset();

    // then
    expect(component.textLabelColor).toBe('white');
  });
});
