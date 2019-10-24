import { Lesson } from './../../shared/model/lesson';
import { LESSONS_LIST_AVAILABLE, ADD_NEW_LESSON, globalEventBus } from './../event-bus-experiments/event-bus';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lessons-counter',
  templateUrl: './lessons-counter.component.html',
  styleUrls: ['./lessons-counter.component.css']
})
export class LessonsCounterComponent implements OnInit {

  lessonsCounter = 0;

  constructor() {
      console.log('LessonsCounterComponent is registered as observer ..');
      globalEventBus.registerObserver(
        LESSONS_LIST_AVAILABLE, 
        this
      );
      globalEventBus.registerObserver(
        ADD_NEW_LESSON, 
        { notify: lessonText => this.lessonsCounter += 1} // in-line observer
      );
  }

  ngOnInit() {}

  notify(data: Lesson[]) {
      console.log('counter component received data ..');
      this.lessonsCounter = data.length;
  }

}
