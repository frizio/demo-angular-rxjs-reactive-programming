import { Lesson } from './../../shared/model/lesson';

import * as _ from 'lodash';

import { Subject, Observable, Observer, BehaviorSubject } from 'rxjs';

// Centralized service that manages the data
class DataStore {

 private lessons: Lesson[] = [];

 private lessonsListSubject = new BehaviorSubject([]);

 public lessonsList$: Observable<Lesson[]> = this.lessonsListSubject.asObservable();

 public initializeLessonsList(newList: Lesson[]) {
    console.log('Call initializeLessonsList');
    this.lessons = _.cloneDeep(newList);
    this.broadcast();
  }

  public addLesson(newLesson: Lesson) {
    console.log('Call addLesson');
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

  toggleLessonViewed(toggled: Lesson) {
    const lesson = _.find(
      this.lessons,
      thelesson => thelesson.id === toggled.id
    );
    lesson.completed = !lesson.completed;
    this.broadcast();
  }

  broadcast() {
    console.log('Call broadcast');
    this.lessonsListSubject.next(_.cloneDeep(this.lessons));
  }

}

export const store = new DataStore();

