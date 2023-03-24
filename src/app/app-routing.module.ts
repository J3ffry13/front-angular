import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from '@modules/main/main.component';
import {BlankComponent} from '@pages/blank/blank.component';
import {LoginComponent} from '@modules/login/login.component';
import {RegisterComponent} from '@modules/register/register.component';
import {DashboardComponent} from '@pages/dashboard/dashboard.component';
import {AuthGuard} from '@guards/auth.guard';
import {ForgotPasswordComponent} from '@modules/forgot-password/forgot-password.component';
import {RecoverPasswordComponent} from '@modules/recover-password/recover-password.component';
import {SubMenuComponent} from '@pages/main-menu/sub-menu/sub-menu.component';
import { ClientesListadoComponent } from '@pages/clientes/clientesListado/clientes-listado.component';
import { ProveedoresListadoComponent } from '@pages/clientes copy/proveedoresListado/proveedores-listado.component';
import { ProductosListadoComponent } from '@pages/productos/productosListado/productos-listado.component';
import { RecepcionProductosListadoComponent } from '@pages/recepcion-productos/recepcion-productos-listado/recepcion-productos-listado.component';
import { RecepcionProductosRegistroComponent } from '@pages/recepcion-productos/recepcion-productos-registro/recepcion-productos-registro.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        children: [
            ///////
            {
                path: 'masters/proveedores',
                component: ProveedoresListadoComponent
            },
            {
                path: 'masters/productos',
                component: ProductosListadoComponent
            },
            {
                path: 'masters/clientes',
                component: ClientesListadoComponent
            },
            ///////
            {
                path: 'process/reception',
                component: RecepcionProductosListadoComponent
            },
            {
                path: 'process/reception/register',
                component: RecepcionProductosRegistroComponent
            },
            {
                path: 'sub-menu-2',
                component: BlankComponent
            },
            {
                path: '',
                component: DashboardComponent
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent,
        // canActivate: [NonAuthGuard]
    },
    {
        path: 'register',
        component: RegisterComponent,
        // canActivate: [NonAuthGuard]
    },
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        // canActivate: [NonAuthGuard]
    },
    {
        path: 'recover-password',
        component: RecoverPasswordComponent,
        // canActivate: [NonAuthGuard]
    },
    {path: '**', redirectTo: '/'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
