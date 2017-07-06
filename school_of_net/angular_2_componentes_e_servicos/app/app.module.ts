import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { TaskEditComponent } from './task/task-edit.component';
import { TaskListComponent } from './task/task-list.component';
import { TaskNewComponent } from './task/task-new.component';
import { TaskService } from './task/task.service';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';


@NgModule({
    imports: [BrowserModule, FormsModule, routing, AlertModule],
    declarations: [
        AppComponent, TaskEditComponent, TaskListComponent, TaskNewComponent
    ],
    bootstrap: [AppComponent],
    providers: [TaskService],
})
export class AppModule {

}