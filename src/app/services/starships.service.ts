import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Starship, SwapiResponse } from '../interfaces/starships.interface';

@Injectable({
  providedIn: 'root',
})
export class StarshipsService {
  public showShipCard: boolean = false;
  public shipNum: number = 0;

  // Aqui enmagatzemarem el llistat de naus
  public starshipList: Starship[] = [];
  public currentStarship!: number; //TODO when working, change to 0 to see wh hap.
  public currentPage: number = 1;

  constructor(private http: HttpClient) {}

  public getStarshipList() {
    // Fem la petició a la api mitjançant http
    // this.http.get<SwapiResponse>('https://swapi.py4e.com/api/starships')
    // .subscribe( resp => {
    //   this.starshipList = resp.results;
    //   console.log(this.starshipList);
    // });
    // Amb paginació:
    this.http
      .get<SwapiResponse>(
        `https://swapi.dev/api/starships/?page=${this.currentPage}`
      )
      .subscribe((resp) => {
        this.starshipList = resp.results;
        this.shipNum = resp.count;
      });
  }

  public changeWiew() {
    this.showShipCard = !this.showShipCard;
  }

  public loadMoreShips() {
    if (this.currentPage < Math.ceil(this.shipNum / 10)) {
      this.currentPage++;
      this.getStarshipList();
      return;
    }
    this.currentPage = 1;
    this.getStarshipList();
  }
}
