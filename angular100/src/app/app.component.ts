import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular100';
  name = "Angular " + VERSION.major;

  questions = {
    question1: true,
    question2: false
  }
}
