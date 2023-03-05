import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-drawer-container class="container" autosize>
      <mat-drawer #drawer class="sidenav" opened mode="side">
        <h1>{{title}}</h1>
      </mat-drawer>
      <app-header (toggleSidenav)="drawer.toggle()"></app-header>
      <div class="sidenav-content">
        <router-outlet></router-outlet>
      </div>
    </mat-drawer-container>
  `,
  styles: [`
    .mat-drawer {
      min-width: 15%;
      width: auto;
      background: #3f51b5;
    }

    .mat-sidenav-container {
      height: 100%;
    }

    h1 {
      margin-left: 20px;
      margin-top: 20px;
      font-size: xx-large;
      color: white;
      font-weight: bold;
    }

    .container {
      width: 100%;
      height: 100%;
    }

    .sidenav-content {
      height: 100%;
      margin: 50px;
    }

    .sidenav {
      padding: 20px;
    }
  `]
})
export class AppComponent {
  title = 'viaxlab';
}
