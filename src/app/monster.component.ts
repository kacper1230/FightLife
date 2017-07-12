import {Component,Input} from '@angular/core'
import { Monster } from './monster'

@Component({
  selector: 'monster',
  template: `
  <div>
    <h2>{{monster.name}}</h2>
    Hp :   {{monster.hp}} <br>
    Atk :  {{monster.atk}}<br>
    Def :  {{monster.def}}<br>
    </div>
    `
})

export class MonsterComponent{

@Input() monster: Monster;


}
