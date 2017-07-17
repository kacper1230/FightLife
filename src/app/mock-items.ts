import {Item} from './item'

export const ITEMS: Item[] = [
  { id: 0, name: "Sword",type: 'weapon', atk: 10, def: 0,equipped : false,value:8 },
  { id: 1, name: "Axe", type: 'weapon',atk: 8, def: 2,equipped : false,value:12 },
  { id: 2, name: "Shield", type: 'shield',atk: 0, def: 10,equipped : false,value:10},
  { id: 3, name: "Small healing potion", type:'heal',atk: 0, def: 0,equipped : false,value:20 },
  { id: 4, name: "Pro elo master sword", type:'weapon',atk: 100, def: 50,equipped : false,value:20 },
  { id: 5, name: "Dragon Sword", type:'weapon',atk: 13, def: 2,equipped : false,value:300 },
  { id: 6, name: "Ząb baby jagi", type:'misc',atk: 0, def: 0,equipped : false,value:3 },
  { id: 7, name: "Pro elo master shield", type:'shield',atk: 0, def: 150,equipped : false,value:20 },
]

export const ShopItems: Item[] = [
  { id: 0, name: "Small healing potion", type:'heal',atk: 0, def: 0,equipped : false,value:20 },
  { id: 1, name: "Pro elo master sword", type:'weapon',atk: 100, def: 50,equipped : false,value:0 },
  { id: 2, name: "Pro elo master shield", type:'shield',atk: 0, def: 150,equipped : false,value:0 }
]
