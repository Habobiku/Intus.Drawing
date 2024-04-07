import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { of } from 'rxjs';
import { MenuService } from '@services/misc/menu.service';

@Injectable({ providedIn: 'root' })
export class HomepageRedirectGuard implements CanActivate {

    constructor(
        private menuService: MenuService,
        private router: Router,
    ) {}

    canActivate() {
        const menuItems = this.menuService.getMenuItems();

        if (menuItems.length) {
            return of(this.router.createUrlTree(menuItems[0].link));
        }
    }

}
