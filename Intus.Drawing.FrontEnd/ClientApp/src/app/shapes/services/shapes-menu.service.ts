import { Injectable } from "@angular/core";
import { MenuItem } from "@models/misc/menu-item.interface";

@Injectable({ providedIn: 'root' })
export class ShapesMenuService {

    getMenuItems(): MenuItem[] {
        return [{
            title: 'Rectangle',
            link: 'rectangle',
        }];
    }
}