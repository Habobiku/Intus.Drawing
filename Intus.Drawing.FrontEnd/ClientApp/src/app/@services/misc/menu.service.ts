import { Injectable } from '@angular/core';
import { MenuItem } from '@models/misc/menu-item.interface';

@Injectable({ providedIn: 'root' })
export class MenuService {

    constructor(
    ) { }

    getMenuItems() {
        const menuItems: MenuItem[] = [];

        menuItems.push({
            title: 'counter',
            link: ['/counter'],
        });

        menuItems.push({
            title: 'fetch-data',
            link: ['/fetch-data'],
        });

        return menuItems;
    }
}
