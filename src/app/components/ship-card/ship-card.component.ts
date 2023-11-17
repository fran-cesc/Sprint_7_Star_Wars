import { Component, EventEmitter, Output } from '@angular/core';
import { StarshipsService } from '../../services/starships.service';
import { Starship } from 'src/app/interfaces/starships.interface';

@Component({
  selector: 'ship-card',
  templateUrl: './ship-card.component.html',
  styleUrls: ['./ship-card.component.css']
})

export class ShipCardComponent {
  public index: number = this.StarshipsService.currentStarship;
  public ship: Starship = this.StarshipsService.starshipList[this.index];

  @Output()
  public onChange: EventEmitter<boolean> = new EventEmitter;
  constructor(private StarshipsService: StarshipsService){}

  public returnToStarship(){
    console.log("returnToStarShip button clicked");
    this.StarshipsService.changeWiew();
    this.onChange.emit(this.StarshipsService.showShipCard);
  }


}
