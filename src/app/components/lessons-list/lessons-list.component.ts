import { Observer, store } from './../event-bus-experiments/app-data';
import * as _ from 'lodash';
import { Lesson } from './../../shared/model/lesson';
import { Component, OnInit } from '@angular/core';

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
    store.lessonsList$.subscribe(this);
  }

  next(data: Lesson[]) {
    this.lessons = data.slice(0);
  }

  toggleLessonViewed(lesson:Lesson) {
    lesson.completed = !lesson.completed;
  }

  delete(deleted: Lesson) {
    _.remove(
      this.lessons,
      lesson => lesson.id === deleted.id
     );

  }

}
