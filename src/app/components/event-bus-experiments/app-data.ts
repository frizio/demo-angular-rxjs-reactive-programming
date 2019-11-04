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

// Centralized service that manages the data
class DataStore {

 private lessons: Lesson[] = [];

 private lessonsListSubject = new SubjectImplementation();

 public lessonsList$: Observable = {
  subscribe: obs => {
    this.lessonsListSubject.subscribe(obs);
    obs.next(this.lessons);
  },
  unsubscribe: obs => {
    this.lessonsListSubject.unsubscribe(obs);
  }
};

 public initializeLessonsList(newList: Lesson[]) {
    this.lessons = _.cloneDeep(newList);
    lessonsListSubject.next(this.lessons);
  }
}

export const store = new DataStore();

