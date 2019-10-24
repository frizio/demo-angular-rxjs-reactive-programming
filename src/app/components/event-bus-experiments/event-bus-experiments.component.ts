import { Lesson } from './../../shared/model/lesson';
import { Component, OnInit } from '@angular/core';
import { globalEventBus, LESSONS_LIST_AVAILABLE, ADD_NEW_LESSON } from './event-bus';
import { sampleLessons } from './../../shared/model/sample-lessons';

@Component({
  selector: 'event-bus-experiments',
  templateUrl: './event-bus-experiments.component.html',
  styleUrls: ['./event-bus-experiments.component.css']
})
export class EventBusExperimentsComponent implements OnInit {

  lessons: Lesson[] = [];

  constructor() { }

  ngOnInit() {
    console.log('2.Top level component broadcast all sample lessons');
    this.lessons = sampleLessons.slice(0);
    globalEventBus.notifyObservers(LESSONS_LIST_AVAILABLE, sampleLessons.slice(0));

    // Simulate server push scenario (like web server or ajax request )
    setTimeout(
      () => {
       this.lessons.push( 
         {
          id: Math.random(),
          description: 'New lesson arriving from the backend'
          }
       );
        globalEventBus.notifyObservers(LESSONS_LIST_AVAILABLE, this.lessons);
      }, 
      5000
    );

  }

  addLesson(lessonText: string) {
    globalEventBus.notifyObservers(ADD_NEW_LESSON, lessonText);
  }

}
