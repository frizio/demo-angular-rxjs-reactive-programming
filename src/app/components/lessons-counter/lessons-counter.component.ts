import { Observer, store } from './../event-bus-experiments/app-data';
import { Lesson } from './../../shared/model/lesson';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lessons-counter',
  templateUrl: './lessons-counter.component.html',
  styleUrls: ['./lessons-counter.component.css']
})
export class LessonsCounterComponent implements OnInit, Observer {

  lessonsCounter = 0;

  constructor() {
      store.lessonsList$.subscribe(this);
  }

  ngOnInit() {}

  next(data: Lesson[]) {
      this.lessonsCounter = data.length;
  }

}
