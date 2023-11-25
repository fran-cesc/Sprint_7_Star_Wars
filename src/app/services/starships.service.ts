import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Starship, SwapiResponse } from '../interfaces/starships.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StarshipsService {
  public showShipCard: boolean = false;
  public shipNum!: number;
  public currentStarship!: number;
  public currentPage: number = 1;
  public starshipList: Starship[] = [];
  public SWAPIURL: string = 'https://swapi.dev/api/starships/?page=';
  public SWAPIURL2: string = 'https://swapi.py4e.com/api/starships/?page=';

  constructor(private http: HttpClient) {}

  public getStarshipList(): Observable<SwapiResponse> {
    return this.http.get<SwapiResponse>(this.SWAPIURL2 + this.currentPage);
  }

  public changeWiew() {
    this.showShipCard = !this.showShipCard;
  }

  public loadMoreShips(): Observable<SwapiResponse> {
    if (this.currentPage < Math.ceil(this.shipNum / 10)) {
      this.currentPage++;
      return this.getStarshipList();
    }
    this.currentPage = 1;
    return this.getStarshipList();
  }
}
