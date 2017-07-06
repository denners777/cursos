import { Component } from '@angular/core';
import { Task } from './task';

declare var module: any;

let TASKS: Task[] = [
    { id: 1, name: 'Trabalhar' },
    { id: 2, name: 'Lavar pratos' },
    { id: 3, name: 'Tirar poeira' },
    { id: 4, name: 'Compras no supermercado' },
    { id: 5, name: 'Cuidar das crianças' },
    { id: 6, name: 'Jogar videogame' },
    { id: 7, name: 'Almoçar' },
    { id: 8, name: 'Jantar' },
    { id: 9, name: 'Fazer exercício' },
    { id: 10, name: 'Pagar contas' }
];

@Component({
    selector: 'task-list',
    templateUrl: 'task-list.component.html',
    moduleId: module.id
})

export class TaskListComponent {
    tasks: Task[] = TASKS;
    selectedTask: Task;

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