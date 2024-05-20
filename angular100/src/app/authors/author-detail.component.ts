import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Author } from "../authors";

@Component({
    selector: 'app-author-detail',
    template: `
        <div>
            {{ author.firstName }}
            <button style="margin-left: 1rem" (click)="select.emit(author)">Select</button>
            <button style="margin-left: 1rem" (click)="delete.emit(author.id)">x</button>
        </div>
    `
})
export class AuthorDetailComponent {
    @Input() author: Author = {} as Author;
    @Output() select = new EventEmitter<Author>();
    @Output() delete = new EventEmitter<number>();
};