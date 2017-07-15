import {Monster} from './monster'
import {Item} from './item'

import {ITEMS} from './mock-items'

const i :Item[] = ITEMS;

export const MONSTERS: Monster[] = [
  { id: 0, name: "Szczur", maxHp: 30,hp: 30, atk: 3, def: 2, exp: 5, drop: [i[1], i[2],i[3]], dropChance: 10 },
  { id: 1, name: "Troll", maxHp: 100,hp: 100, atk: 5, def: 3, exp: 10, drop: [ITEMS[1],i[3]], dropChance: 20 },
  { id: 2, name: "Smok", maxHp: 500,hp: 500, atk: 15, def: 1, exp: 50, drop: [ITEMS[1],ITEMS[5]], dropChance: 20 },
  { id: 3, name: "Pro elo master dizaster", maxHp: 1000,hp: 1000, atk: 23, def: 15, exp: 200, drop: [ITEMS[1]], dropChance: 20 },
  { id: 4, name: "Potężny Bujno", hp: 10000,maxHp: 10000, atk: 45, def: 30, exp: 500, drop: [ITEMS[5]], dropChance: 5 },
  { id: 5, name: "Babajaga", hp: 50,maxHp: 50, atk: 4, def: 2, exp: 15, drop: [i[6],i[3]], dropChance: 75 },
];
