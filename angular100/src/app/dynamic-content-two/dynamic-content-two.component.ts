import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-content-two',
  templateUrl: './dynamic-content-two.component.html',
  styleUrl: './dynamic-content-two.component.css'
})
export class DynamicContentTwoComponent {
  @Input() data: string;
}
