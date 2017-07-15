import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router'
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {PlayerComponent} from './player.component'
import {MonsterComponent} from './monster.component'
import {FightViewComponent} from './fightView.component'
import {CharacterViewComponent} from './characterView.component'
import {PlayerService} from './player.service'
import {MonsterService} from './monster.service'
import {HomeComponent} from './home.component'
import {ShopComponent} from './shop.component'
import {PlaceService} from './place.service'
import { AppComponent } from './app.component';

const appRoutes:Routes = [
  {path: 'character', component: CharacterViewComponent},
  {path: 'fightView', component: FightViewComponent},
  {path: 'shop', component: ShopComponent},
  {path: '', component: HomeComponent},
  {path: '**', redirectTo: ''},
  //{path: 'shop',component: CharacterViewComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    MonsterComponent,
    FightViewComponent,
    CharacterViewComponent,
    HomeComponent,
    ShopComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PlayerService,MonsterService,PlaceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
