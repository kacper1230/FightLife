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
                <tr *ngFor="let item of player.eq">
                  <td>{{item.name}}</td>
                  <td>{{item.atk}}</td>
                  <td>{{item.def}}</td>
                  <td><input type="button" class="btn btn-default" *ngIf="item.type == 'heal'" value="Use" (click)="use(item)"></td>
                </tr>
              </tbody>

            </table>

        </div>
      </div>
  </div>
  `,
})

export class CharacterViewComponent {
  player: Player;

  constructor(private _playerService: PlayerService) {
    this.player = this._playerService.getPlayer();
  }

  use(item : Item):void{
    if(item.type == 'heal'){
        if(this.player.hp + 20 > this.player.maxHp){
            this.player.hp = this.player.maxHp;
            this.player.eq.splice(this.player.eq.findIndex(item => item.name === item.name)-1,1);
        }else{
          this.player.eq.splice(this.player.eq.findIndex(item => item.name === item.name)-1,1);
          this.player.hp += 20;
        };
    }





  }

  ngOnInit() {

  }

}
