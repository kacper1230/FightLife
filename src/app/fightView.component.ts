import {Component, OnInit} from '@angular/core'
import {MonsterComponent} from './monster.component'
import { Player } from './player'
import {PlayerComponent} from './player.component'
import { Monster } from './monster'
import {Item} from './item'
import {MonsterService} from './monster.service'
import {CharacterViewComponent} from './characterView.component'
import {PlayerService} from './player.service'


@Component({
  selector: 'fightview',
  template: `
<div class="container">
    <div class="row text-center">
      <div class="col-md-6">
        <player [player]="player"></player>
      </div>
      <div class="col-md-6">
        <monster [monster]="monster"></monster>
      </div>
    </div>

<div class="row text-center">
  <div class="btn-group ">
      <input type="button" class="btn btn-default" (click)="startFight()" value="Zacznij walke">
      <input type="button" class="btn btn-default" (click)="startFastFight()" value="Szybka walka">
      <input type="button" class="btn btn-default" (click)="stopFight()" value="Zatrzymaj walke">
  <!--    <input type="button" class="btn btn-default" (click)="nextTurn()" value="Nastepna tura"> -->
  <!--    <input type="button" class="btn btn-default" (click)="levelUp(player)" value="Dodaj se levela gosciu">-->
  <!--    <input type="button" class="btn btn-default" (click)="heal()" value="dodaj zycie">-->
      <input type="button" class="btn btn-default" (click)="nextMonster()" value="Wylosuj nowego przeciwnika">
  <!--    <input type="button" class="btn btn-default" (click)="restart()" value="zrestartuj">-->
      <input type="button" class="btn btn-default" (click)="restart()" value="Zacznij od nowa" *ngIf="player.alive == false">
  </div>
</div>
    <br>
    <div class="panel panel-success">
      <div class="panel-body">
        {{message}}

      </div>

      <div class="panel-footer">
      <div class="text" style="font-family:'Comic Sans MS'; font-size:3em">Loot : </div>
        <ul>
          <li *ngFor="let item of loot"  style="font-family:'Comic Sans MS'; font-size:1.5em">{{item.name}} </li>
        </ul>
      </div>
    </div>

    </div>
    `,

})

export class FightViewComponent {

  public fightInterval: any;

  message: string;
  monster: Monster;

  MONSTERS: Monster[];

  counter: number;
  prog: number = 40;
  player: Player;
  loot :Item[];

  constructor(private _monsterService: MonsterService, private _playerService: PlayerService) {
    this.player = this._playerService.player;

  }



  ngOnInit() {
    this.MONSTERS = this._monsterService.getMonsters();
    this.nextMonster();
  }




  startFight(): void {
    this.fightInterval = setInterval(() => { this.nextTurn(); }, 500);
  }

  startFastFight(): void {
    this.fightInterval = setInterval(() => { this.nextTurn(); }, 50);
  }

  stopFight(): void {
    clearInterval(this.fightInterval);
  }

  attack(gracz: Player, przeciwnik: Monster): void {
    var skutecznoscGracza = gracz.atk - przeciwnik.def;
    var zabranehp = Math.floor((Math.random() * skutecznoscGracza) + 1);
    var zabraneHpGraczowi = Math.floor((Math.random() * przeciwnik.atk + 3) + 1);

    if (zabranehp >= przeciwnik.hp) {
      this.message = "Zabiles " + przeciwnik.name + "\n";
      this.stopFight();
      this.counter++;
      przeciwnik.hp -= zabranehp;
      gracz.exp += przeciwnik.exp;
      if (this.player.exp >= this.prog) {
        this.levelUp(this.player);
      }
      gracz.gold += Math.floor((Math.random()*40)+1);
      if ((Math.round(Math.random() * 99) + 1) >= przeciwnik.dropChance) {
        var los: number = Math.round(Math.random() * (przeciwnik.drop.length - 1));
        console.log(przeciwnik.drop[los]);
        gracz.eq.push(przeciwnik.drop[los]); // ------------------------------Tablica zaczyna sie od 0
        this.message = this.message + "Wydropiles : " + przeciwnik.drop[los].name + "\n";
      } else this.message = this.message + "Nic nie wypadlo gnoju \n";
      this.nextMonster();
    } else {
      if (skutecznoscGracza <= 0) {
        this.message = "Jestes za slaby gosciu wez troche wyleveluj.";
        gracz.hp -= zabraneHpGraczowi;
        this.stopFight();
      } else {
        this.message = "zaatakowales gnoja " + przeciwnik.name + " i zabrales mu " + zabranehp + " hp.";
        gracz.hp -= zabraneHpGraczowi;
        przeciwnik.hp -= zabranehp;
      }
    }

  }

  respawnMonsters(): void {
    this.MONSTERS = this._monsterService.respawnMonsters();
  }

  respawnPlayer(): void {
    this.player = this._playerService.respawnPlayer();
  }

  nextTurn(): void {
    if (this.player.hp <= 0) {
      this.die();
      this.stopFight();
    } else {
      if (this.monster.hp <= 0) {
        this.nextMonster();
      } else {
        this.attack(this.player, this.monster);
      }
    }
  }

  restart(): void {
    this.respawnPlayer();
    this.prog = 40;
    this.nextMonster();
    this.counter = 0;
    this.message = "";
  }

  nextMonster(): void {
    this.respawnMonsters();
    var lvlMonsterow;
    if(this.player.lvl > this.MONSTERS.length){
      lvlMonsterow = this.MONSTERS.length;
    }else {
      lvlMonsterow = this.player.lvl;
    }
    this.monster = this.MONSTERS[Math.floor((Math.random() * lvlMonsterow)) ];
  }

  levelUp(gracz: Player): void {
    gracz.maxHp += 20;
    gracz.hp = gracz.maxHp;
    gracz.atk += 2;
    gracz.lvl += 1;
    if (gracz.exp - this.prog < 0) {
      gracz.exp = 0;
    } else {
      gracz.exp -= this.prog;
    }
    this.prog += 40;
  }

  die(): void {
    this.player.alive = false;
    this.message = "umarles se";
  }

  heal(): void {
    this.player.hp = this.player.maxHp;
  }

  ITEMS: Item[] = [
    { id: 0, name: "Sword",type: 'weapon', atk: 10, def: 0,value:8 },
    { id: 1, name: "Axe", type: 'weapon',atk: 8, def: 2,value:12 },
    { id: 2, name: "Shield", type: 'shield',atk: 0, def: 10,value:10},
    { id: 3, name: "Small healing potion", type:'heal',atk: 0, def: 0,value:20 },
  ]

}
