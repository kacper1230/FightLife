import {Monster} from './monster'
import {Item} from './item'

import {ITEMS} from './mock-items'


export const MONSTERS: Monster[] = [
  { id: 0, name: "Szczur", maxHp: 30,hp: 30, atk: 2, def: 1, exp: 12, drop: [ITEMS[0], ITEMS[1], ITEMS[2]], dropChance: 10 },
  { id: 1, name: "Troll", maxHp: 100,hp: 100, atk: 5, def: 3, exp: 30, drop: [ITEMS[1]], dropChance: 20 },
  { id: 2, name: "Smok", maxHp: 500,hp: 500, atk: 15, def: 1, exp: 200, drop: [ITEMS[1]], dropChance: 20 },
  { id: 3, name: "Pro elo master dizaster", maxHp: 1000,hp: 1000, atk: 23, def: 15, exp: 2000, drop: [ITEMS[1]], dropChance: 20 },
  { id: 4, name: "Potężny Bujno", hp: 10000,maxHp: 10000, atk: 45, def: 30, exp: 5000, drop: [ITEMS[5]], dropChance: 5 },
];
