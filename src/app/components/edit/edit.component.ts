import { Component, OnInit } from '@angular/core';
  import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Game } from '../index/Game';
import { GameService } from '../../services/games/game.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  game: any = {};
  angForm: FormGroup;

  constructor(private gameService: GameService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { 
    this.createForm();
  }

  createForm(){
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  moveRoute(){
    this.router.navigate(['index'])
  }

  updateGame(name, price) {
    this.route.params.subscribe(params => {
    this.gameService.updateGame(name, price, params['id'])
    .then(() => this.moveRoute())
 });
}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.gameService.editGame(params['id']).subscribe(res => {
        this.game = res;
      })
    })
  }

}
