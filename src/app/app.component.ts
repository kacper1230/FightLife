import { Component,OnInit } from '@angular/core';
import {PlayerService} from './player.service'
import {Player} from './player'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  player:Player;

  constructor(private _playerService: PlayerService){
    this.player = this._playerService.getPlayer();

  }
  ngOnInit(){

  }


}
