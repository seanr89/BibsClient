

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
import { PlayersModule } from '../components/players/players.module';

@NgModule({
  declarations: [
    AppNavComponent,
    HomeComponent,
    FeedbackComponent,
    AboutComponent,
  ],
  imports: [CommonModule, RouterModule, MaterialModule, PlayersModule, FormsModule, ReactiveFormsModule],
  exports: [
    AppNavComponent,
    HomeComponent,
    FeedbackComponent
  ],
})
export class CoreModule {}