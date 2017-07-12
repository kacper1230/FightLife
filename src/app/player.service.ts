import {Injectable} from '@angular/core'
import {Item} from './item'
import {Player} from './player'


@Injectable()
export class PlayerService {

  player: Player = {
    id: 1,
    name: "Kacper",
    maxHp: 150,
    hp: 150,
    atk: 10,
    exp: 0,
    lvl: 1,
    eq: [],
    alive:true
  }

  respawnPlayer(): Player{
    this.player = {
    id: 1,
    name: "Kacper",
    maxHp: 150,
    hp: 150,
    atk: 10,
    exp: 0,
    lvl: 1,
    eq: [],
    alive:true
    }
    return this.player;
  }

  getPlayer(): Player {
    return this.player;
  }
}
