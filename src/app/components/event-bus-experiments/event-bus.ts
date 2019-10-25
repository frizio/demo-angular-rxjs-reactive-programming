
import * as _ from 'lodash';

// Event type for the application
export const LESSONS_LIST_AVAILABLE = 'NEW_LIST_AVAILABLE';
export const ADD_NEW_LESSON = 'ADD_NEW_LESSON';

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

class EventBus implements Subject {
}


export const globalEventBus = new EventBus();
