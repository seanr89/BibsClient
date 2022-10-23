

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppNavComponent } from './app-nav/app-nav.component';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './home/home.component';
import { PlayerListItemComponent } from './player-list-item/player-list-item.component';

@NgModule({
  declarations: [
    AppNavComponent,
    HomeComponent,
    PlayerListItemComponent
  ],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [
    AppNavComponent,
    HomeComponent,
    PlayerListItemComponent
  ],
})
export class CoreModule {}