import { Component, OnInit } from '@angular/core';

import { Game } from './Game';
import { GameService } from '../../services/games/game.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  games: Game[];
  
  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService
    .getGames()
    .subscribe((data: Game[]) => {
      this.games = data;
    })
  }

  deleteGame(id){
    let fullResponse = {
      game: "",
      success: null
    }
    this.gameService.deleteGame(id).subscribe(
      (res) => {
        this.gameService
        .getGames()
        .subscribe((data: Game[]) => {
          this.games = data;
        })
      },
      (err) => {
        console.log(err);
      }
  )}
}
