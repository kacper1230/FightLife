import { Component } from '@angular/core'
import { ITEMS , ShopItems} from './mock-items'
import { Item } from './item'
import { Player } from './player'
import { PlayerService } from './player.service'

@Component({
  selector: 'shop',
  template: `
  <div class="container">
  <h2>Sklepson Twoj hajs : {{player.gold}} </h2>
  <div class="row">
    <div class="col-md-6">
      <table class="table">
        <thead>
          <th>Name</th>
          <th>Attack</th>
          <th>Defense</th>
          <th>Value</th>
          <th>Options</th>
        </thead>
        <tbody>
          <tr *ngFor="let item of items">
            <td>{{item.name}}</td>
            <td>{{item.atk}}</td>
            <td>{{item.def}}</td>
            <td>{{item.value}}</td>
            <td><input class="btn btn-default" type="button" value="Kup" (click)="buy(item)"></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-md-6">
    <table class="table">
      <thead>
        <th>Name</th>
        <th>Attack</th>
        <th>Defense</th>
        <th>Value</th>
        <th>Options</th>
      </thead>
      <tbody>
        <tr *ngFor="let item of player.eq ; let i = index">
        <td>{{i}}</td>
          <td>{{item.name}}</td>
          <td>{{item.atk}}</td>
          <td>{{item.def}}</td>
          <td>{{item.value}}</td>
          <td><input class="btn btn-default" type="button" value="Sprzedaj" (click)="sell(i)"></td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
  <div class="panel">
    <div class="panel-body">
      {{message}}
    </div>
  </div>

  </div>
  `,
})


export class ShopComponent {
  items: Item[] = ShopItems;
  player: Player;
  message: string;

  constructor(private _playerService: PlayerService) {
    this.player = this._playerService.getPlayer();
  }


  sell(index : number): void{
    this.message = "Sprzedales " + this.player.eq[index].name + ".";
    this.player.gold += this.player.eq[index].value;
    this.player.eq.splice(index,1);
  }


  buy(item: Item): void {
    if (this.player.gold >= item.value) {
      this.player.eq.push(item);
      this.player.gold -= item.value;
      this.message = "Kupiles " + item.name + ".";
    } else {
      this.message = "Nie masz wystarczajacej ilosci hajsu gosciu";
    }

  }


}
