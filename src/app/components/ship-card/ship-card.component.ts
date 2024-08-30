import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { StarshipsService } from '../../services/starships.service';
import { Starship } from 'src/app/interfaces/starships.interface';

@Component({
  selector: 'ship-card',
  templateUrl: './ship-card.component.html',
  styleUrls: ['./ship-card.component.css'],
})
export class ShipCardComponent{
  public index: number = 0;
  public shipUrl: string = "";
  public shipNumber: number | null = 0;
  public ship?: Starship | null;


  @Output()
  public onChange: EventEmitter<boolean> = new EventEmitter();

  constructor(private starshipsService: StarshipsService) {
    this.starshipsService.getStarshipList().subscribe( (resp) => {
      this.index = this.starshipsService.currentStarship;
      this.shipUrl = resp.results[this.index].url;
      this.ship = resp.results[this.index];
      this.shipNumber = this.extractShipNumberFromURL(this.shipUrl);

    })
  }

  public returnToStarship() {
    this.starshipsService.changeWiew();
    this.onChange.emit(this.starshipsService.showShipCard);
  }

  public extractShipNumberFromURL(url: string): number | null {
    const regex = /\/(\d+)\/$/;
    const match = url.match(regex);
    if (match && match[1]) {
        return parseInt(match[1], 10);
    }
    return null;  // Retorna null si no encuentra un número en la URL
}
}
