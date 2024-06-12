import { Component, Input, ViewChild, TemplateRef } from '@angular/core';
import { TabGroupComponent } from './tab-group.component';
import { TabPanelComponent } from './tab-panel.component';

@Component({
    selector: 'app-tab-panel',
    template: `
        <ng-template>
            <ng-content></ng-content>
        </ngtemplate>
    `
})
export class TabPanelComponent{
    @Input() title: string;
    @ViewChild(TemplateRef, {static = true}) panelBody: TemplateRef<unknow>;

    constructor(private tabGroup: TabGroupComponent){}

    ngOninit() {
        this.tabGroup.addTab(this);
    }
}