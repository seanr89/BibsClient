import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { CoreModule } from 'src/app/core/core.module';
import { GeneratorsRoutingModule } from './generators-routing.module';
import { GeneratorBasicComponent } from './generator-basic/generator-basic.component';

@NgModule({
  declarations: [
    GeneratorBasicComponent
  ],
  imports: [
    CommonModule,
    GeneratorsRoutingModule,
    MaterialModule,
    CoreModule,
  ],
})
export class GeneratorsModule {}