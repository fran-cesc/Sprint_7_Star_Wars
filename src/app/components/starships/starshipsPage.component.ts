import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Starship } from 'src/app/interfaces/starships.interface';
import { StarshipsService } from 'src/app/services/starships.service';

@Component({
  selector: 'starships',
  templateUrl: './starshipsPage.component.html',
  styleUrls: ['./starshipsPage.component.css'],
})
export class StarshipsPageComponent implements OnInit {

  constructor(private starshipService: StarshipsService) {}

  ngOnInit(): void {
    // obtenim el llistat de naus des del servei
    this.starshipService.getStarshipList();
  }

  @Output()
  public onChange: EventEmitter<boolean> = new EventEmitter();

  get starships(): Starship[] {
    return this.starshipService.starshipList;
  }

  public showShip(i: number) {
    this.starshipService.changeWiew(); //Canviem la visualització a ship-card a través del servei
    this.starshipService.currentStarship = i; //enviem al servei el nº de la nau clicada
    this.onChange.emit(this.starshipService.showShipCard); //emetem al comp pare (main-page) el valor boolean per visualitzar el llistat o la ship-card)
  }

  public loadMoreShips(){
    this.starshipService.loadMoreShips();
  }
}
