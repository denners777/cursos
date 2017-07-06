"use strict";
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
var TaskService = (function () {
    function TaskService() {
    }
    TaskService.prototype.getTasks = function () {
        return TASKS;
    };
    TaskService.prototype.getTask = function (id) {
        var array = this.getTasks().filter(function (item) { return item.id == id; });
        return array.length ? array[0] : null;
    };
    TaskService.prototype.createTask = function (task) {
        task.id = this.getTasks().length + 1;
        this.getTasks().push(task);
    };
    return TaskService;
}());
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map