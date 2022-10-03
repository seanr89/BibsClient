import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { CoreModule } from 'src/app/core/core.module';
import { GeneratorsRoutingModule } from './generators-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GeneratorsRoutingModule,
    MaterialModule,
    CoreModule,
  ],
})
export class GeneratorsModule {}