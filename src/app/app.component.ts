import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { LandingPageComponent } from "./main-content/landing-page/landingPage.component";


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MainContentComponent,
    LandingPageComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sakura';
}
