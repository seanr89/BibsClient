import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerListItemComponent } from './player-list-item/player-list-item.component';

@NgModule({
  declarations: [
    PlayerListComponent,
    PlayerListItemComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    PlayerListComponent
  ]
})
export class PlayersModule {}