import { Lesson } from './../../shared/model/lesson';
import { Component, OnInit } from '@angular/core';
import { sampleLessons } from './../../shared/model/sample-lessons';
import { store } from './app-data';

@Component({
  selector: 'event-bus-experiments',
  templateUrl: './event-bus-experiments.component.html',
  styleUrls: ['./event-bus-experiments.component.css']
})
export class EventBusExperimentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    store.initializeLessonsList(sampleLessons.slice(0));

    // Simulate server push scenario (like web server or ajax request )
    setTimeout(
      () => {
       const newLesson = 
         {
          id: Math.random(),
          description: 'New lesson arriving from the backend'
          }
        //TODO
      }, 
      5000
    );

  }

  addLesson(lessonText: string) {
    //TODO
  }

}
