import { Observer } from 'rxjs';
import { store } from './../event-bus-experiments/app-data';
import { Lesson } from './../../shared/model/lesson';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lessons-counter',
  templateUrl: './lessons-counter.component.html',
  styleUrls: ['./lessons-counter.component.css']
})
export class LessonsCounterComponent implements OnInit, Observer<Lesson[]> {

  lessonsCounter = 0;

  constructor() { }

  ngOnInit() {
    store.lessonsList$.subscribe(this);
  }

  next(data: Lesson[]) {
      this.lessonsCounter = data.length;
  }

  error(err: any) {
    console.log(err);
  }

  complete() {
    console.log('Completed');
  }

}
