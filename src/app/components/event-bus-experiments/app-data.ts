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
class DataStore implements Observable {

  private lessons: Lesson[] = [];

  private lessonsListSubject = new SubjectImplementation();

  public subscribe(obs: Observer) {
    this.lessonsListSubject.subscribe(obs);
    obs.next(this.lessons);
  }

  public unsubscribe(obs: Observer) {
    this.lessonsListSubject.unsubscribe(obs);
  }

  public initializeLessonsList(newList: Lesson[]) {
    this.lessons = _.cloneDeep(newList);
    this.broadcast();
  }

  public addLesson(newLesson: Lesson) {
    this.lessons.push(_.cloneDeep(newLesson));
    this.broadcast();
  }

  public deleteLesson(deleted: Lesson) {
    _.remove(
      this.lessons,
      lesson => lesson.id === deleted.id
     );
     this.broadcast();
  }

  toggleLessonViewed(toggled:Lesson) {
    const lesson = _.find(
      this.lessons,
      lesson => lesson.id === toggled.id
    );
    lesson.completed = !lesson.completed;
    this.broadcast();
  }

  broadcast() {
    this.lessonsListSubject.next(_.cloneDeep(this.lessons));
  }

}

export const store = new DataStore();

