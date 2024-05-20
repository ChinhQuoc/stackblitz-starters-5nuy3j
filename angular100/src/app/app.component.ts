import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  isDanger = false;
  isWarning = false;

  classes = ['box', 'red-boder', 'yellow-background'];
}
