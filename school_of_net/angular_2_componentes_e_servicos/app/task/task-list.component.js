"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var TASKS = [
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
var TaskListComponent = (function () {
    function TaskListComponent() {
        this.tasks = TASKS;
    }
    TaskListComponent.prototype.onClick = function (task) {
        this.selectedTask = task;
    };
    TaskListComponent = __decorate([
        core_1.Component({
            selector: 'task-list',
            template: "\n    <div class=\"container\">\n        <div class=\"row\">\n            <h2>Minhas Tarefas</h2>\n            <table class=\"table\">\n                <thead>\n                    <tr>\n                        <th>#</th>\n                        <th>Nome</th>\n                        <th>A\u00E7\u00F5es</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let task of tasks\">\n                        <td> {{ task.id }} </td>\n                        <td> {{ task.name }} </td>\n                        <td>\n                            <button type=\"button\" class=\"btn btn-defaul\" (click)=\"onClick(task)\">\n                                <span class=\"glyphicon glyphicon-pencil\"></span>\n                            </button>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n            <task-edit [task]=\"selectedTask\"></task-edit>\n        </div>\n    </div>\n    ",
        }), 
        __metadata('design:paramtypes', [])
    ], TaskListComponent);
    return TaskListComponent;
}());
exports.TaskListComponent = TaskListComponent;
// [] binding - propriedade do html
// () alteracoes da view para o component 
//# sourceMappingURL=task-list.component.js.map