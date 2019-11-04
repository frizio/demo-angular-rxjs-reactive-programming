import { store } from './../event-bus-experiments/app-data';
import * as _ from 'lodash';
import { Lesson } from './../../shared/model/lesson';
import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs';

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements OnInit, Observer<Lesson[]> {
  
  public lessons: Lesson[] = [];

  constructor() { }

  ngOnInit() {
    store.lessonsList$.subscribe(this);
  }

  next(data: Lesson[]) {
    this.lessons = data;
  }

  error(err: any) {
    console.log(err);
  }

  complete() {
    console.log('Complete');
  }

  toggleLessonViewed(lesson: Lesson) {
    store.toggleLessonViewed(lesson);
  }

  delete(deleted: Lesson) {
    store.deleteLesson(deleted);
  }

}
