import { TaskListComponent } from './task/task-list.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);