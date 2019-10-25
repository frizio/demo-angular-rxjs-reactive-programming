import { Observer, lessonsList$ } from './../event-bus-experiments/app-data';
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
      console.log('LessonsCounterComponent is registered as observer ..');
      lessonsList$.subscribe(this);
  }

  ngOnInit() {}

  next(data: Lesson[]) {
      console.log('counter component received data ..');
      this.lessonsCounter = data.length;
  }

}
