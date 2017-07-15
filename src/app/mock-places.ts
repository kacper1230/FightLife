import {Place} from './place'
import {MONSTERS} from './mock-monsters'
import {Monster} from './monster'

export const PLACES = [
  {id:0, name:'Rat Cave', monstersScope:[MONSTERS[0]]},
  {id:1, name:'Bagna', monstersScope:[MONSTERS[5]]},
  {id:2, name:'Dragon Cave', monstersScope:[MONSTERS[1],MONSTERS[2]]},
  {id:3, name:'Pro elo master Cave', monstersScope:[MONSTERS[3]]},
];
