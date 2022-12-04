

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppNavComponent } from './app-nav/app-nav.component';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './home/home.component';
import { PlayerListItemComponent } from './player-list-item/player-list-item.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { PlayersTableComponent } from './players-table/players-table.component';

@NgModule({
  declarations: [
    AppNavComponent,
    HomeComponent,
    PlayerListItemComponent,
    FeedbackComponent,
    AboutComponent,
    PlayersTableComponent
  ],
  imports: [CommonModule, RouterModule, MaterialModule, FormsModule, ReactiveFormsModule],
  exports: [
    AppNavComponent,
    HomeComponent,
    PlayerListItemComponent,
    FeedbackComponent,
    PlayersTableComponent,
  ],
})
export class CoreModule {}