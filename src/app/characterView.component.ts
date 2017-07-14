import {Component, OnInit} from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import {PlayerComponent} from './player.component'
import {PlayerService} from './player.service'
import {Player} from './player'
import {Item} from './item'


@Component({
  selector: 'characterview',
  styles: [`  #item{
              border:blue
              }

              `],
  template: `
  <div class="container">
      <div class="row">
        <div class="col-md-4">
          <player [player]="player"></player>
        </div>
        <div class="col-md-8">
          <h2 class="text-center">Equipment</h2>
            <table class="table">
              <thead>
                <th>Name</th>
                <th>Attack</th>
                <th>Defense</th>
                <th>Options</th>
              </thead>
              <tbody>
                <tr *ngFor="let item of player.eq; let i = index" [attr.data-index]="i">
                  <td>{{item.name}}</td>
                  <td>{{item.atk}}</td>
                  <td>{{item.def}}</td>
                  <td>
                    <input type="button" class="btn btn-default" *ngIf="item.type == 'heal'" value="Use" (click)="use(i)">
                    <input type="button" class="btn btn-default" *ngIf="item.equipped == false" value="Equip" (click)="equip(i)">
                    <input type="button" class="btn btn-default" *ngIf="item.equipped == true" value="Unequip" (click)="unequip(i)">
                  </td>
                </tr>
              </tbody>

            </table>
            <br>
            <br>
            <br>
            <h2 class="text-center">Equipped</h2>
              <table class="table">
                <thead>
                  <th>Name</th>
                  <th>Attack</th>
                  <th>Defense</th>
                  <th>Options</th>
                </thead>
                <tbody>
                  <tr *ngFor="let item of equipped; let i = index" [attr.data-index]="i">
                    <td>{{item.name}}</td>
                    <td>{{item.atk}}</td>
                    <td>{{item.def}}</td>
                    <td>
                      <input type="button" class="btn btn-default" value="Unequip" (click)="unequip(i)">
                    </td>
                  </tr>
                </tbody>
              </table>
              {{message}}
        </div>
      </div>
  </div>
  `,
})

export class CharacterViewComponent {
  player: Player;
  equipped :Item[];
  message:string;

  constructor(private _playerService: PlayerService) {
    this.player = this._playerService.getPlayer();
    this.equipped = this._playerService.getEquippedItems();
  }

  ngOnInit() {

  }

  pokaz():void {
    console.log(this.player.eq);
  }



  use(index:number):void{
    if(this.player.eq[index].type == 'heal'){
        if(this.player.hp + 20 > this.player.maxHp){
            this.player.hp = this.player.maxHp;
            this.player.eq.splice(index,1);
        }else{
          this.player.eq.splice(index,1);
          this.player.hp += 20;
        };
    }
  }

  equip(index : number):void{
    var player = this.player
    if(this.equipped.filter(function(el){
      if(el.type == player.eq[index].type) return true;
    }).length > 0){
      this.message = "Juz masz zalozony ten typ.";
    }else {
      this.player.atk += this.player.eq[index].atk;
      this.player.def +=  this.player.eq[index].def;
      this.equipped.push(this.player.eq[index]);
      this.player.eq.splice(index,1);
    }
  }

  unequip(index : number):void {
    this.player.atk -= this.equipped[index].atk;
    this.player.def -=  this.equipped[index].def;
    this.player.eq.push(this.equipped[index]);
    this.equipped.splice(index,1);
  }





}
