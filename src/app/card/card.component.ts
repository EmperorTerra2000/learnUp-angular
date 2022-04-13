import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input()
  name
  @Input()
  number
  @Input()
  amount
  @Input()
  expirationDate
  @Input()
  paymentSystem

  constructor() {
    setTimeout(()=>{
      this.number = this.number.slice(0, 4)
        + ' ' + this.number.slice(4, 8)
        + ' ' + this.number.slice(8, 12)
        + ' ' + this.number.slice(12, 16);
    }, 0);
  }
}
