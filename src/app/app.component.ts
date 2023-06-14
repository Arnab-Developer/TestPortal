import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: 
    `<p><a routerLink="/home-component">Home</a></p>
    <p><a routerLink="/all-test-component">All Test</a></p>
    <p><a routerLink="/test-component">Test</a></p>
    <router-outlet></router-outlet>`
})
export class AppComponent {
  title = 'TestPortal';
}