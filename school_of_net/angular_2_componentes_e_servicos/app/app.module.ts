import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { TaskEditComponent } from './task/task-edit.component';
import { TaskListComponent } from './task/task-list.component';
import { routing } from './app.routing';


@NgModule({
    imports: [BrowserModule, FormsModule, routing],
    declarations: [AppComponent, TaskEditComponent, TaskListComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}