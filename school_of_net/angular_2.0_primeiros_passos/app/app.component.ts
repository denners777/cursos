import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <h1>{{ title.name }}</h1>
    <input [ngModel]="title.name" />
    <input [(ngModel)]="title.name" />
    <input [value]="title.description" />
    `,
})

export class AppComponent {
    title = {
        description: "Hello World!!!",
        name: "Denner"

}