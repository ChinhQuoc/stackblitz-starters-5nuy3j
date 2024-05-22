import { Component, ElementRef, QueryList, VERSION, ViewChild, ViewChildren } from '@angular/core';
import { ToggleComponent } from './toggle/toggle.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  /*
  C1: toggleComp trong ViewChild là toggleComp trên componenrt ToggleComponent
  @ViewChild('toggleComp') toogleComp: ToggleComponent = new ToggleComponent();
  <app-toggle #toggleComp [(checked)]="isCheck"></app-toggle> 
  
  C2: @ViewChild(ToggleComponent) toogleComp: ToggleComponent = new ToggleComponent();

  - Muốn có tham chiếu tới ToggleComponent trong OnInit() chứ kp ngAfterViewInit() thêm
  static = true (false is default)
  @ViewChild(ToggleComponent, { static: true }) toogleComp: ToggleComponent = new ToggleComponent();

  - Nếu ToggleComponent là multiple child trong AppComponent thì dùng ViewChildren
*/
  // @ViewChild('toggleComp') toogleComp: ToggleComponent = new ToggleComponent();
  // @ViewChild(ToggleComponent, { static: true }) toogleComp: ToggleComponent = new ToggleComponent();
  @ViewChild('toggleButton', { static: true }) toggleButton: ElementRef<HTMLButtonElement> = {} as ElementRef<HTMLButtonElement>;
  @ViewChild('nameInput', { static: true }) nameInput: ElementRef<HTMLInputElement> = {} as ElementRef<HTMLInputElement>;
  @ViewChildren(ToggleComponent) toggleComps: QueryList<ToggleComponent>;

  name = "Angular " + VERSION.major;
  isCheck = true;
  showLast = true;

  ngOnInit() {
    this.nameInput.nativeElement.focus();
    // console.log("ngOnInit: ", this.toogleComp, this.toggleButton);
    //this.toggleComps.changes.subscribe(console.log);
  }

  ngAfterViewInit() {
    // console.log(this.toogleComp);
    // this.toogleComp.toggle();
    this.toggleComps.changes.subscribe(console.log);
  }
}
