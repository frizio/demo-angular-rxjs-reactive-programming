
import * as _ from 'lodash';

export interface Observer {
  notify(data: any);
}

interface Subject {
  registerObserver(eventType: string, obs: Observer);
  unregisterObserver(eventType: string, obs: Observer);
  notifyObservers(eventType: string, data: any);
}

class EventBus implements Subject {

  private observers: Observer[] = [];

  registerObserver(eventType: string, obs: Observer) {
    this.observers.push(obs);
  }
  unregisterObserver(eventType: string, obs: Observer) {
    const newObservers = _.remove(
      this.observers,
      el => el === obs
    );
  }

  notifyObservers(eventType: string, data: any) {
    this.observers.forEach(obs => obs.notify(data));
  }

}

export const globalEventBus = new EventBus();
