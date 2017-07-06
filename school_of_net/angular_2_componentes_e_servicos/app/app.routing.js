"use strict";
var task_list_component_1 = require('./task/task-list.component');
var router_1 = require('@angular/router');
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
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map