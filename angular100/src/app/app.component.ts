import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  show = false;

  user = {
    name: 'Chau',
    age: 30
  };
}
