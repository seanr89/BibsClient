import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { CoreModule } from 'src/app/core/core.module';
import { GeneratorsRoutingModule } from './generators-routing.module';
import { GeneratorBasicComponent } from './generator-basic/generator-basic.component';
import { PlayerListComponent } from '../components/players/player-list/player-list.component';
import { SimplePlayerAddComponent } from './simple-player-add/simple-player-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditPlayerDialogComponent } from './edit-player-dialog/edit-player-dialog.component';
import { PlayersModule } from '../components/players/players.module';

@NgModule({
  declarations: [
    GeneratorBasicComponent,
    SimplePlayerAddComponent,
    EditPlayerDialogComponent
  ],
  imports: [
    CommonModule,
    GeneratorsRoutingModule,
    MaterialModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    PlayersModule
  ],
  entryComponents: [EditPlayerDialogComponent]
})
export class GeneratorsModule {}