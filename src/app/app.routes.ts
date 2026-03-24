import { Routes } from '@angular/router';
import { Components } from './pages/components/components';
import { Templating } from './pages/templating/templating';
import { Signals } from './pages/signals/signals';
import { Form } from './pages/form/form';

export const routes: Routes = [
    {path:'', component: Components},
    {path:'templating', component: Templating},
    {path:'signals', component: Signals},
    {path:'forms', component: Form},
];
