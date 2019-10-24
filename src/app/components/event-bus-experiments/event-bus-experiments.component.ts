import { Component, OnInit } from '@angular/core';
import { globalEventBus, LESSONS_LIST_AVAILABLE, ADD_NEW_LESSON } from './event-bus';
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

  addLesson(lessonText: string) {
    globalEventBus.notifyObservers(ADD_NEW_LESSON, lessonText);
  }

}
