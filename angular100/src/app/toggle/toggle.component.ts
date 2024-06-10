import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-toggle',
    templateUrl: './toggle.component.html',
    styleUrls: ['./toggle.component.css']
})
export class ToogleComponent{
    @Input() checked = false;
    @Output() checkedChange = new EventEmitter<boolean>();

    toggle() {
        this.checked = !this.checked;
        this.checkedChange.emit(this.checked);
    }
}