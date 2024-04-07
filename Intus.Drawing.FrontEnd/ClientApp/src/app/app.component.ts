import { Component, OnInit } from '@angular/core';
import { MenuItem } from '@models/misc/menu-item.interface';
import { MenuService } from '@services/misc/menu.service';
import { Observable, of } from 'rxjs';

@Component({
    selector: 'drawing-root',
    templateUrl: './app.component.html',
    styles: [`
        :host {
            height: 100%;
            display: flex;
            flex-direction: column;
            background: white;
            [disabled] {
                --mdc-filled-button-disabled-container-color: rgba(0, 0, 0, 0.12);
                --mdc-filled-button-disabled-label-text-color: rgba(0, 0, 0, 0.26);
                --mdc-filled-button-container-color: rgba(0, 0, 0, 0.12);
                --mdc-filled-button-label-text-color: rgba(0, 0, 0, 0.26);
            }
        }
    `],
})
export class AppComponent implements OnInit {

  menuItems$: Observable<MenuItem[]>;

  constructor(
    private menuService: MenuService,
  ) {}

  ngOnInit() {
    this.menuItems$ = of(this.menuService.getMenuItems());
  }
}
