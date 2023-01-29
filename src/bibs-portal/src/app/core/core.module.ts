

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppNavComponent } from './app-nav/app-nav.component';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './home/home.component';
import { PlayerListItemComponent } from '../components/players/player-list-item/player-list-item.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { PlayersTableComponent } from './players-table/players-table.component';
import { PlayersModule } from '../components/players/players.module';

@NgModule({
  declarations: [
    AppNavComponent,
    HomeComponent,
    FeedbackComponent,
    AboutComponent,
    PlayersTableComponent
  ],
  imports: [CommonModule, RouterModule, MaterialModule, PlayersModule, FormsModule, ReactiveFormsModule],
  exports: [
    AppNavComponent,
    HomeComponent,
    FeedbackComponent,
    PlayersTableComponent,
  ],
})
export class CoreModule {}