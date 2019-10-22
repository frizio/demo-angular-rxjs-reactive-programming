import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserEventExperimentsComponent } from './components/browser-event-experiments/browser-event-experiments.component';
import { EventBusExperimentsComponent } from './components/event-bus-experiments/event-bus-experiments.component';
import { LessonsListComponent } from './components/lessons-list/lessons-list.component';
import { LessonsCounterComponent } from './components/lessons-counter/lessons-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    BrowserEventExperimentsComponent,
    EventBusExperimentsComponent,
    LessonsListComponent,
    LessonsCounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
