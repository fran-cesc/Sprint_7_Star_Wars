import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Starship } from 'src/app/interfaces/starships.interface';
import { StarshipsService } from 'src/app/services/starships.service';

@Component({
  selector: 'starships',
  templateUrl: './starshipsPage.component.html',
  styleUrls: ['./starshipsPage.component.css'],
})
export class StarshipsPageComponent{

  public starshipList: Starship[] = [];
  public displayedStarships: Starship[] = [];
  public numShipPages: number = 0;
  public shipsPerPage: number = 10;


  constructor(private starshipService: StarshipsService) {
    this.starshipService.getStarshipList().subscribe((resp) => {
      this.starshipList = resp.results;
      this.starshipService.starshipList = resp.results;
      this.numShipPages = Math.ceil(resp.count / 10);
      console.log("numShipPages: ", this.numShipPages);
      this.starshipService.shipNum = resp.count;
      this.displayedStarships = this.starshipList.slice(0, this.shipsPerPage);
    });
  }


  @Output()
  public onChange: EventEmitter<boolean> = new EventEmitter();

  public showShip(i: number) {
    this.starshipService.currentStarship = i; //enviem al servei el nº de la nau clicada
    this.starshipService.changeWiew(); //Canviem la visualització a ship-card a través del servei
    this.onChange.emit(this.starshipService.showShipCard); //emetem al comp pare (main-page) el valor boolean per visualitzar el llistat o la ship-card)
  }

  public loadMoreShips(numShipPages: number) {
    this.starshipService.loadMoreShips().subscribe((resp) => {
      this.starshipService.starshipList = resp.results;
      this.displayedStarships = resp.results;
    });
  }
}
