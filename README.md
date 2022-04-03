# AngularGraphs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.1.

## Setup and References

ng new angular-graphs
npm install bootstrap --save
npm install ng2-charts@2.4.2 --save --legacy-peer-deps
npm install chart.js@2.9.4 --save --legacy-peer-deps

Go to angular.json and add:
"styles": [
    "node_modules/bootstrap/dist/css/bootstrap.min.css",
    "src/styles.scss"
]

A few resources:
[Line Chart](https://www.tutsmake.com/angular-13-line-chart-example/)
[Bar Chart](https://www.tutsmake.com/angular-13-bar-chart-example/)
[Pie Chart](https://www.tutsmake.com/angular-13-pie-chart-using-chart-js-example/)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
