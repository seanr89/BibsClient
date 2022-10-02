

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppNavComponent } from './app-nav/app-nav.component';

@NgModule({
  declarations: [
  
    AppNavComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [
  ],
})
export class CoreModule {}