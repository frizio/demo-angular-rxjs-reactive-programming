import { Observer } from 'rxjs';
import { store } from './../event-bus-experiments/app-data';
import * as _ from 'lodash';
import { Lesson } from './../../shared/model/lesson';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements OnInit, Observer<Lesson[]> {

  public lessons: Lesson[] = []; // data access for the view

  constructor() { }

  ngOnInit() {
    console.log('Call ngOnInit');
    store.lessonsList$.subscribe(this);
  }

  next(data: Lesson[]) {
    console.log('Call next');
    this.lessons = data;
  }

  error(err: any) {
    console.log(err);
  }

  complete() {
    console.log('Completed');
  }

  toggleLessonViewed(lesson: Lesson) {
    store.toggleLessonViewed(lesson);
  }

  delete(deleted: Lesson) {
    store.deleteLesson(deleted);
  }

}
