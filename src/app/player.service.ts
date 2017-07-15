import {Injectable} from '@angular/core'
import {Item} from './item'
import {Player} from './player'


@Injectable()
export class PlayerService {

  equipped : Item[] = [];

  player: Player = {
    id: 1,
    name: "Kacper",
    maxHp: 150,
    hp: 150,
    atk: 10,
    def:3,
    exp: 0,
    lvl: 1,
    eq: [],
    alive: true,
    gold: 0,
  }

  respawnPlayer(): Player {
    this.player = {
      id: 1,
      name: "Kacper",
      maxHp: 150,
      hp: 150,
      atk: 10,
      def:3,
      exp: 0,
      lvl: 1,
      eq: [],
      alive: true,
      gold : 0,
    }

    this.equipped = [];
    return this.player;
  }

  getPlayer(): Player {
    return this.player;
  }

  getEquippedItems():Item[]{
    return this.equipped;
  }
}
