import {AppState} from '@/store/state';
import {UiState} from '@/store/ui/state';
import {Component, HostBinding, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppService} from '@services/app.service';
import {Observable} from 'rxjs';

const BASE_CLASSES = 'main-sidebar elevation-4';
@Component({
    selector: 'app-menu-sidebar',
    templateUrl: './menu-sidebar.component.html',
    styleUrls: ['./menu-sidebar.component.scss']
})
export class MenuSidebarComponent implements OnInit {
    @HostBinding('class') classes: string = BASE_CLASSES;
    public ui: Observable<UiState>;
    public user;
    public menu = MENU;

    constructor(
        public appService: AppService,
        private store: Store<AppState>
    ) {}

    ngOnInit() {
        this.ui = this.store.select('ui');
        this.ui.subscribe((state: UiState) => {
            this.classes = `${BASE_CLASSES} ${state.sidebarSkin}`;
        });
        this.user = this.appService.user;
    }
}
//https://www.w3schools.com/icons/fontawesome5_icons_code.asp
export const MENU = [
    {
        name: 'Maestros',
        iconClasses: 'fas fa-th-list',
        // path: ['/masters/'],
        children: [
            {
                name: 'Proveedores',
                iconClasses: 'fas fa-truck',
                path: ['/masters/proveedores']
            },
            {
                name: 'Productos',
                iconClasses: 'fas fa-archive',
                path: ['masters/productos']
            },
            {
                name: 'Clientes',
                iconClasses: '	fas fa-users',
                path: ['masters/clientes']
            }
        ]
    },
    {
        name: 'Procesos',
        iconClasses: 'fas fa-edit',
        children: [
            {
                name: 'Recepcion de Productos',
                iconClasses: 'fas fa-archive',
                path: ['/process/reception']
            },
            {
                name: 'Designación de Productos',
                iconClasses: 'fas fa-handshake',
                path: ['/process/designation']
            }
        ]
    },
    {
        name: 'Reportes',
        iconClasses: 'fas fa-chart-bar',        
        children: [
            {
                name: 'Dashboard',
                iconClasses: 'fas fa-chart-pie',
                path: ['/reports/dashboard']
            },
            {
                name: 'Blank',
                iconClasses: 'fas fa-file',
                path: ['/sub-menu-2']
            }
        ]
    },
    {
        name: 'Seguridad',
        iconClasses: 'fas fa-user-shield',        
        children: [
            {
                name: 'Usuarios',
                iconClasses: 'far fa-id-badge',
                path: ['/security/users']
            }
        ]
    }
];
