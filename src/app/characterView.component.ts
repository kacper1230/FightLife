import {Component, OnInit} from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import {PlayerComponent} from './player.component'
import {PlayerService} from './player.service'
import {Player} from './player'



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
              </thead>
              <tbody>
                <tr *ngFor="let item of player.eq">
                  <td>{{item.name}}</td>
                  <td>{{item.atk}}</td>
                  <td>{{item.def}}</td>
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

  ngOnInit() {

  }

}
