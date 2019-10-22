
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
    throw new Error('');
  }
  unregisterObserver(eventType: string, obs: Observer) {
    throw new Error('');
  }
  notifyObservers(eventType: string, data: any) {
    throw new Error('');
  }



}


