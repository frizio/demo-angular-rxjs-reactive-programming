import { Lesson } from './../../shared/model/lesson';

import * as _ from 'lodash';

import { Subject, Observable, Observer, BehaviorSubject } from 'rxjs';

// Centralized service that manages the data
class DataStore {

 private lessonsListSubject = new BehaviorSubject([]);

 public lessonsList$: Observable<Lesson[]> = this.lessonsListSubject.asObservable();

 private cloneLessons() {
  return _.cloneDeep(this.lessonsListSubject.getValue());
}

 public initializeLessonsList(newList: Lesson[]) {
    this.lessonsListSubject.next(_.cloneDeep(newList));
  }

  public addLesson(newLesson: Lesson) {
    console.log('Call addLesson');
    const lessons = this.cloneLessons();
    lessons.push(_.cloneDeep(newLesson));
    this.lessonsListSubject.next(lessons);
  }

  public deleteLesson(deleted: Lesson) {
    const lessons = this.cloneLessons();
    _.remove(
      lessons,
      lesson => lesson.id === deleted.id
    );
    this.lessonsListSubject.next(lessons);
  }

  toggleLessonViewed(toggled: Lesson) {
    const lessons = this.cloneLessons();
    const lesson = _.find(
      lessons,
      thelesson => thelesson.id === toggled.id
    );
    lesson.completed = !lesson.completed;
    this.lessonsListSubject.next(lessons);
  }

}

export const store = new DataStore();

