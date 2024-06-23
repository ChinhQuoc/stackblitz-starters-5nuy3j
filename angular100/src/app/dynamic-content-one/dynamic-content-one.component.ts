import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-content-one',
  templateUrl: './dynamic-content-one.component.html',
  styleUrl: './dynamic-content-one.component.css'
})
export class DynamicContentOneComponent {
  @Input() data: string;
}
