import { Component } from '@angular/core';
import { Task } from './task';


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
    template: `
    <div class="container">
        <div class="row">
            <h2>Minhas Tarefas</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor="let task of tasks">
                        <td> {{ task.id }} </td>
                        <td> {{ task.name }} </td>
                        <td>
                            <button type="button" class="btn btn-defaul" (click)="onClick(task)">
                                <span class="glyphicon glyphicon-pencil"></span>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <task-edit [task]="selectedTask"></task-edit>
        </div>
    </div>
    `,
})

export class TaskListComponent {
    tasks: Task[] = TASKS;
    selectedTask: Task;

    onClick(task) {
        this.selectedTask = task;
    }

}

// [] binding - propriedade do html
// () alteracoes da view para o component