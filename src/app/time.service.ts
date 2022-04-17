import { DOCUMENT, SET_INTERVAL } from './tokens';
import { Inject, Injectable } from '@angular/core';

@Injectable()
export class TimeService {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(SET_INTERVAL) private setInterval: Function,
  ) { }

  public start() {
    const timeElement: HTMLElement = this.document.querySelector('.time-element');
    let counter: number = 0;

    this.setInterval(() => {
      timeElement.innerText = `${counter++}`;
    }, 1000);
  }
}
