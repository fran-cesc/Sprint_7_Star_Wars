import { Component } from '@angular/core';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  public showShipCard: boolean = false;

  onChangeShip(param: boolean) {
    this.showShipCard = param;
  }
}
