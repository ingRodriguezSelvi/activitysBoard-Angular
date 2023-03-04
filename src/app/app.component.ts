import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <mat-sidenav-container>
          <mat-sidenav #sidenav mode="side" opened>
              <h1>{{title}}</h1>
          </mat-sidenav>

          <mat-sidenav-content>
              <app-header></app-header>
              <div class="container">
                  <router-outlet></router-outlet>
              </div>
          </mat-sidenav-content>
      </mat-sidenav-container>`,
  styles: [`
    .mat-drawer {
      width: 15%;
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
          margin: 50px;
      }

  `]
})
export class AppComponent {
  title = 'viaxlab';
}
