# Demo Angular Rxjs Reactive Programming

RxJs is a toolkit that allow us to build asyncronous applications in reactive style using the Observable pattern.

### Part 1
- Reactive Programming
- Observable Pattern
- RxJs library and its operators
- Observables and Subjects

### Part 2
#### browser event experiment
#### event bus experiment
- Global Event Bus
- Observable Pattern
- Solving the problem of component communication (not nested) by using a global event bus based on the observer pattern 
- Epilogo
-- Data ownering and encapsulation: no central owner of the data;
-- Event Bus (analogo a SUBJECT) globally accessible: everyone can registry and notify events;
-- Timing: sequentiality in event registration and notification.

### Part 3
#### observable pattern experiments
- First problem: mixing the ability of observe data and emitting the same data.
-- Solution: separate the ability of register on observer and the ability to emit data
- Second Problem: Data Ownering - Encapsulation
-- Solution: centralize the data with Data store pattern.
- Conclusion 1:
-- In our program we are actually using two different patterns. We are using the <b>observable pattern</b> to create a clear separation between the ability to subscribe to the data and the ability to be able to trigger new versions of that data. So there is a clear separation between that <br/>> 
And we've <b>centralized the data</b> in a single place in our application to solve the multiple ownership issue that we have. So if the data is modifiable it's important that only one part of the application has ownership of the data and not multiple parts like we had before.
- Summary
-- So let's now summarize what were the multiple problems that we solved using an implementation that is based around the observable pattern and the store pattern around this combination of patterns. 
Well one of the first things that we have sold was that we no longer have the ability in components like the lessons counter the lessons at least to have direct access to the data that is shared with other components and we no longer have the ability to meet new versions of the data everywhere on the application. So if a part of the application like for example the lessons list component or the lessons counter needs the data is simply subscribes to it but it doesn't necessarily have the ability to emit new versions  of that data directly. So that was the first problem that was solved.
The second problem that was solved is that now with this implementation we no longer have to reason about sequences of synchronous operations in our application. We don't have to necessarily subscribe here the less and counter in the constructor.So this makes it a lot simpler to reason about asynchronous operations.

Now the first and separate problem that we have solved is that before we have multiple components or te top level component and the lessons least component that needed to modify the data but neither was the only owner of the data. So modifying the data locally created the problem that they had to notify other parts of the application of their modification. So with the store pattern we have moved the data to a central location and we have constrained the ownership of that data to a centralized service. So this solves the problem of who owns the data. The data is no longer owned by any specific component of the view the data is now owned by a service a centralized service, at the level of the service layer. So for example the lessons lease component wants to modify the data it needs to send a message to that centralized service which is the store the store will modify the data and it will broadcast those changes to any interested parties via the lessons least observable.
So with these we have covered the main benefits of using a reactive approach for building a synchronous applications like user interfaces.

## Parte 3b: RxJS Introduction

## Angular CLI version 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
