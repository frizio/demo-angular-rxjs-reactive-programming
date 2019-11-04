import { Lesson } from './../../shared/model/lesson';

import * as _ from 'lodash';

export interface Observer {
  // Ability of emitting new data and being notified
  next(data: any);
}

export interface Observable {
  // Ability to subscribe to new data
  subscribe(obs: Observer);
  unsubscribe(obs: Observer);
}

// The Subject essentially is the "EventBus"
interface Subject extends Observer, Observable {
}

class SubjectImplementation implements Subject {

  private observers: Observer[] = [];

  next(data: any) {
    // Breoadcate to all observers the emitted data
    this.observers.forEach(
      obs => obs.next(data)
    );
  }

  subscribe(obs: Observer) {
    this.observers.push(obs);
  }

  unsubscribe(obs: Observer) {
    _.remove(
      this.observers,
      el => el === obs
    );
  }

}

// This subject contain all observers that will be notified when a new lesson arrive
const lessonsListSubject = new SubjectImplementation();

// This define the data of the application
export let lessonsList$: Observable = {
  subscribe: obs => {
    lessonsListSubject.subscribe(obs);
    obs.next(lessons);
  },
  unsubscribe: obs => {
    lessonsListSubject.unsubscribe(obs);
  }
};

// 
let lessons: Lesson[] = [];

export function initializeLessonsList(newList: Lesson[]) {
  lessons = _.cloneDeep(newList);
  // Notify to all the observers
  lessonsListSubject.next(lessons);
}
