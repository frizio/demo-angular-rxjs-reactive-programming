import { Lesson } from './../../shared/model/lesson';
import { globalEventBus, Observer } from './../event-bus-experiments/event-bus';
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
    globalEventBus.registerObserver(this);
  }

  ngOnInit() {
  }

  notify(data: Lesson[]) {
    console.log('3. LessonsListComponent Receiving lessons ');
    this.lessons = data;
  }

}
