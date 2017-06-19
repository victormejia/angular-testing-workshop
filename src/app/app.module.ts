import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './core/menu/menu.component';
import { HackerListComponent } from './hacker-list/hacker-list.component';
import { HackerComponent } from './hacker/hacker.component';

import { ApiService } from './core/services/api.service';
import { StatusComponent } from './status/status.component';
import { StatsComponent } from './stats/stats.component';
import { ShortDatePipe } from './core/pipes/short-date.pipe.soln';
import { NonNumericDirective } from './core/directives/non-numeric.directive';
import { HackerDetailComponent } from './hacker-detail/hacker-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HackerListComponent,
    HackerComponent,
    StatusComponent,
    StatsComponent,
    ShortDatePipe,
    NonNumericDirective,
    HackerDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
