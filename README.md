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
In our program we are actually using two different patterns. We are using the <b>observable pattern</b> to create a clear separation between the ability to subscribe to the data and the ability to be able to trigger new versions of that data. So there is a clear separation between that <br/>> 
And we've <b>centralized the data</b> in a single place in our application to solve the multiple ownership issue that we have. So if the data is modifiable it's important that only one part of the application has ownership of the data and not multiple parts like we had before.

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
