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

  public lessons: Lesson[] = []; //data access for the view

  constructor() { }

  ngOnInit() {
    store.lessonsList$.subscribe(this);
  }

  next(data: Lesson[]) {
    this.lessons = data;
  }

  toggleLessonViewed(lesson: Lesson) {
    store.toggleLessonViewed(lesson);
  }

  delete(deleted: Lesson) {
    store.deleteLesson(deleted);
  }

}
