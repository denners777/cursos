import { Component } from '@angular/core';
import { Task } from './task';
import { TaskService } from './task.service';

declare var module: any;

@Component({
    selector: 'task-list',
    templateUrl: 'task-list.component.html',
    moduleId: module.id
})

export class TaskListComponent {
    tasks: Task[];
    selectedTask: Task;

    constructor(private taskService: TaskService) {
        this.tasks = this.taskService.getTasks();
    }

    selectTask(task) {
        this.selectedTask = task;
    }

    deleteTask(id: number) {
        let index = this.tasks.findIndex(item => item.id == id);
        if (index != -1) {
            this.tasks.splice(index, 1);
        }
    }

}

// [] binding - propriedade do html
// () alteracoes da view para o component