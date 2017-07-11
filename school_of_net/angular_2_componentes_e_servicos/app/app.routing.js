"use strict";
var task_list_component_1 = require('./task/task-list.component');
var router_1 = require('@angular/router');
var task_edit_component_1 = require('./task/task-edit.component');
var task_new_component_1 = require('./task/task-new.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/tasks/list',
        pathMatch: 'full',
    },
    {
        path: 'tasks/list',
        component: task_list_component_1.TaskListComponent
    },
    {
        path: 'tasks/new',
        component: task_new_component_1.TaskNewComponent
    },
    {
        path: 'tasks/:id/edit',
        component: task_edit_component_1.TaskEditComponent
    },
    {
        path: 'tasks/teste',
        component: task_new_component_1.TaskNewComponent
    },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map