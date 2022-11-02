import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackComponent } from './core/feedback/feedback.component';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'feedback', component: FeedbackComponent },
  {
    path: 'generators',
    loadChildren: () =>
        import('./generators/generators.module').then(
            (m) => m.GeneratorsModule
        )
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
