import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { GameService } from '../../services/games/game.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  title = "Add a game";
  angForm: FormGroup;

  constructor(private gameService: GameService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm(){
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  addGame(name, price){
    this.gameService.addGame(name, price);
  }

  ngOnInit() {
  }

}
