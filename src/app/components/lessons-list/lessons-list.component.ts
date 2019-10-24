import { Lesson } from './../../shared/model/lesson';
import { globalEventBus, Observer, LESSONS_LIST_AVAILABLE, ADD_NEW_LESSON } from './../event-bus-experiments/event-bus';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements OnInit, Observer {

  lessons: Lesson[] = [];

  constructor() {
    console.log('1. LessonsListComponent is register as Observer');
    globalEventBus.registerObserver(
      LESSONS_LIST_AVAILABLE, this
    );
    globalEventBus.registerObserver(
      ADD_NEW_LESSON, 
      { 
        notify: 
        lessonText => {
          this.lessons.push( { id: Math.random(), description: lessonText } )
      }
  } );
  }

  ngOnInit() {
  }

  notify(data: Lesson[]) {
    console.log('3. LessonsListComponent Receiving lessons ');
    this.lessons = data;
  }

  toggleLessonViewed(lesson:Lesson) {
    console.log('Toggling lesson ...');
    lesson.completed = !lesson.completed;
}

}
