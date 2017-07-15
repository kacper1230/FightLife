import {Injectable} from '@angular/core'

import {Monster} from './monster'
import {MONSTERS} from './mock-monsters'
import {ITEMS} from './mock-items'

@Injectable()
export class MonsterService {

  MONSTERS: Monster[] = MONSTERS;

  getMonsters(): Monster[] {
    return this.MONSTERS;
  }
}
