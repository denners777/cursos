import { TaskListComponent } from './task/task-list.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskEditComponent } from './task/task-edit.component';
import { TaskNewComponent } from './task/task-new.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/tasks/list',
        pathMatch: 'full',
    },
    {
        path: 'tasks/list',
        component: TaskListComponent
    },
    {
        path: 'tasks/new',
        component: TaskNewComponent
    },
    {

        path: 'tasks/:id/edit',
        component: TaskEditComponent
    },
    {

        path: 'tasks/teste',
        component: TaskNewComponent
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);