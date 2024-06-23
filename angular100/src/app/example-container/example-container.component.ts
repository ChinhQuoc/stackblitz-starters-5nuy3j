import { Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-example-container',
  templateUrl: './example-container.component.html',
  styleUrl: './example-container.component.css'
})
export class ExampleContainerComponent {
  @ViewChild("dynamicComponent", { read: ViewContainerRef, static: true })
  containerRef: ViewContainerRef;

  constructor(private cfr: ViewContainerRef) {}

  async addDynamicCompOne() {
    const { DynamicContentOneComponent } = await import('../dynamic-content-one/dynamic-content-one.component');
    this.cfr.clear();
    const componentRef = this.cfr.createComponent(DynamicContentOneComponent);
    componentRef.instance.data = "INPUT DATA 1";
  }

  async addDynamicCompTwo() {
    const { DynamicContentTwoComponent } = await import('../dynamic-content-two/dynamic-content-two.component');
    this.cfr.clear();
    const componentRef = this.cfr.createComponent(DynamicContentTwoComponent);
    componentRef.instance.data = "INPUT DATA 2";
  }
}