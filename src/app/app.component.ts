import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public data: Object = {id: 'first', name: 'Trofim'};

  public onClick() {
    this.data = {
      ...this.data,
      id: 'second'
    };
  }
}
