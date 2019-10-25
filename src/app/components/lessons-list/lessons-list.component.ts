import { Observer } from './../event-bus-experiments/app-data';
import * as _ from 'lodash';
import { Lesson } from './../../shared/model/lesson';
import { Component, OnInit } from '@angular/core';
import { lessonsList$ } from '../event-bus-experiments/app-data';

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements OnInit, Observer {

  lessons: Lesson[] = [];

  constructor() {
  }

  ngOnInit() {
    console.log('1. LessonsListComponent is register as Observer');
    lessonsList$.subscribe(this);
  }

  next(data: Lesson[]) {
    console.log('3. LessonsListComponent Receiving lessons ');
    this.lessons = data.slice(0);
  }

  toggleLessonViewed(lesson:Lesson) {
    console.log('Toggling lesson ...');
    lesson.completed = !lesson.completed;
  }

  delete(deleted: Lesson) {
    _.remove(
      this.lessons,
      lesson => lesson.id === deleted.id
     );

  }

}
