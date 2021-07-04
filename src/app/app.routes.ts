import { RouterModule, Routes } from '@angular/router';
import { UserDetalleComponent } from './user-detalle/user-detalle.component';
import { UserComponent } from './user/user.component';



const ROUTES: Routes = [
    {path: 'users', component: UserComponent},
    {path: 'user/:login', component: UserDetalleComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'users'}
];

export const ROUTING = RouterModule.forRoot(ROUTES, {useHash: true});
