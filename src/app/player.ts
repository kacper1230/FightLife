import {Item} from './item'

export class Player {
  id: number;
  name: string;
  maxHp: number;
  hp: number;
  atk: number;
  exp: number;
  lvl: number;
  eq: Item[];
  alive: boolean;
}
