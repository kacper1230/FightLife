import {Item} from './item'

export class Monster {
  id:number;
  name:string;
  maxHp:number;
  hp: number;
  atk : number;
  def : number;
  exp:number;
  drop : Item[];
  dropChance :number;
}
