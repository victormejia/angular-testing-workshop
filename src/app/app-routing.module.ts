import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HackerListComponent } from './hacker-list/hacker-list.component';
import { StatsComponent } from './stats/stats.component';
import { HackerDetailComponent } from './hacker-detail/hacker-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'hackers',
    pathMatch: 'full'
  },
  {
    path: 'hackers',
    component: HackerListComponent
  },
  {
    path: 'hackers/:id',
    component: HackerDetailComponent
  },
  {
    path: 'stats',
    component: StatsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
