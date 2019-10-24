import { Component, OnInit } from '@angular/core';
import { globalEventBus, LESSONS_LIST_AVAILABLE } from './event-bus';
import { sampleLessons } from './../../shared/model/sample-lessons';

@Component({
  selector: 'event-bus-experiments',
  templateUrl: './event-bus-experiments.component.html',
  styleUrls: ['./event-bus-experiments.component.css']
})
export class EventBusExperimentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('2.Top level component broadcast all sample lessons');
    globalEventBus.notifyObservers(LESSONS_LIST_AVAILABLE, sampleLessons.slice(0));
  }

}
