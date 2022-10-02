

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppNavComponent } from './app-nav/app-nav.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    AppNavComponent
  ],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [
    AppNavComponent
  ],
})
export class CoreModule {}