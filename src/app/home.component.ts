import {Component} from '@angular/core'
import {PlayerService} from './player.service'
import {Player} from './player'
import {Monster} from './monster'
import {MonsterService} from './monster.service'

@Component({
  selector: 'home',
  template: `
  <div class="container">
  <h2>Stan danych</h2>
    <div class="row">
      <div class="col-md-6" style="border:2px solid red;">
        <h3>Gracz</h3>
          Imie : {{player.name}}<br>
          Hp : {{player.hp}}<br>
          atk : {{player.atk}}<br>
          gold : {{player.gold}}

      </div>
      <div class="col-md-6" style="border:2px solid blue;">
        <h3>Mostersy</h3>
        <ul>
          <li *ngFor="let monster of MONSTERS">{{monster.name}} , hp : {{monster.hp}}</li>
        </ul>
        <input type="button" class="btn btn-success" (click)="respawnMonsters()" value="zresp je">

      </div>
    </div>
  </div>
  `,
})


export class HomeComponent {
  player: Player;
  MONSTERS: Monster[];

  constructor(private _playerService: PlayerService, private _monsterService: MonsterService) {
    this.player = this._playerService.getPlayer();
    this.MONSTERS = this._monsterService.getMonsters();
  }

  respawnMonsters(): void {
    this.MONSTERS = this._monsterService.respawnMonsters();
  }

}
