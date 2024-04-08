import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShapesMenuService } from 'app/shapes/services/shapes-menu.service';

@Component({
    templateUrl: './main.page.html',
    styleUrls: ['./main.page.scss'],
})
export class ShapesMainPage {

    menuItems = this.shapesMenuService.getMenuItems();

    get activeMenuItemLink() {
        const route = this.activatedRoute.firstChild?.routeConfig?.path || null;
        return route;
    }

    get activeMenuItemTitle() {
        const activeLink = this.activeMenuItemLink;
        if (activeLink) {
            const menuItem = this.menuItems.find(x => x.link === activeLink);

            return menuItem?.title || '';
        }

        return '';
    }

    constructor(
        private activatedRoute: ActivatedRoute,
        private shapesMenuService: ShapesMenuService,
    ) { }
}
