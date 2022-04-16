import { Injectable } from '@angular/core';

@Injectable()
export class TimeService {
  constructor() { }

  public start() {
    const timeElement: HTMLElement = document.querySelector('.time-element');
    let counter: number = 0;

    setInterval(() => {
      timeElement.innerText = `${counter++}`;
    }, 1000);
  }
}
