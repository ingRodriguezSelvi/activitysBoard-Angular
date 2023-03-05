# Viaxlab

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.1.

Funcionamiento:

1. Por defecto existen 4 columnas de tareas las cuales llame bucket, existe un bucket por defecto (Sin fecha asignada).

2. Al momento de crear una tarea que no esté en una fecha determinada esta es agregada al bucket por defecto.

3. Si al momento de crear una tarea en una fecha que no coincida con ningún bucket, se crea de forma automática un bucket para esa fecha, y se ordena de menor a mayor fecha los buckets.

4. Se pueden eliminar buckets completos y activitys independientes.
5. Puedes transferir mediante el drop las activitys a siguientes buckets (No se cambia de forma automática la fecha del activity).
6. Al momento de editar una tarea y asignarle una fecha esta se mueve al bucket perteneciente
7. Cuenta con diseño mobile
8. Menu de hamburguesa por defecto open para emparejar más con las pantallas de la prueba.

Puntos de mejora:

-Mucha lógica de los servicios deben ser transferidas a un backend de tal forma que el ui solo pinte la info del backend.

-Al momento de mover la actividad hacia un bucket que se asigne de forma automática a la fecha del bucket.

-Crear servicios abstractos.

-Test de componentes y servicios

He deployado el proyecto en gitHub-pages y así probar el funcionamiento de la aplicación
link:https://ingrodriguezselvi.github.io/activitysBoard-Angular/board
También dejó acceso al repositorio: https://github.com/ingRodriguezSelvi/activitysBoard-Angular
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
