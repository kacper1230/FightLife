import {Component,Input} from '@angular/core'
import {MonsterComponent} from './monster.component'
import { Player } from './player'
import { Monster } from './monster'
import {Item} from './item'

@Component({
  selector: 'player',
  template: `
    <h1>{{player.name}}</h1>
    Hp gracza : {{player.hp}} <br>
    Atk gracza : {{player.atk}} <br>
    Def gracza : {{player.def}} <br>
    Exp : {{player.exp}} <br>
    Level : {{player.lvl}}<br>
    Gold : {{player.gold}}

    `
})

export class PlayerComponent {

  @Input() player: Player ;


}
