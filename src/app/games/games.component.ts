import { Component, OnInit } from '@angular/core';
import { games } from 'src/assets/data/games';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
})
export class GamesComponent {
  public queue = games;
  constructor() {}
}
