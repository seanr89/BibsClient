import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { CoreModule } from 'src/app/core/core.module';
import { GeneratorsRoutingModule } from './generators-routing.module';
import { GeneratorBasicComponent } from './generator-basic/generator-basic.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { SimplePlayerAddComponent } from './simple-player-add/simple-player-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GeneratorBasicComponent,
    PlayerListComponent,
    SimplePlayerAddComponent
  ],
  imports: [
    CommonModule,
    GeneratorsRoutingModule,
    MaterialModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class GeneratorsModule {}