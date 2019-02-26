import { CoheteComponent } from './cohete/cohete.component';

export const appRutas = [
    { path: '', redirectTo: '/control' , pathMatch: 'full' } ,
    { path: 'control', component: CoheteComponent }
];
