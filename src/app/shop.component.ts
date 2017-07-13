import { Component } from '@angular/core'
import { ITEMS } from './mock-items'
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
        <tr *ngFor="let item of player.eq">
          <td>{{item.name}}</td>
          <td>{{item.atk}}</td>
          <td>{{item.def}}</td>
          <td>{{item.value}}</td>
          <td><input class="btn btn-default" type="button" value="Sprzedaj" (click)="sell(item)"><input type="button" value="znajdz" (click)="znajdz(item)"></td>
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
  items: Item[] = ITEMS;
  player: Player;
  message: string;

  constructor(private _playerService: PlayerService) {
    this.player = this._playerService.getPlayer();
  }

  znajdz(item:Item):void{
    console.log(this.player.eq);

  }


  sell(item: Item): void{
    this.player.gold += item.value;
//    console.log(this.checkItemName(item , this.player.eq));
    this.player.eq = this.player.eq.filter(function (el){
      return el.name != item.name;
    });
//    this.player.eq = this.player.eq.filter(item => item.name === item.name)
//  this.player.eq.splice(this.player.eq.findIndex(item => item.name === item.name)-1,1);
    this.message = "Sprzedales " + item.name + ".";
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
