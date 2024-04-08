import { Injectable } from "@angular/core";
import { AbstractDataResolver } from "./data.resolver.abstract";
import { ShapesApiService } from "@services/api/shapes-api.service";
import { RouterService } from "@services/misc/router.service";

@Injectable({ providedIn: 'root' })
export class RectangleResolver extends AbstractDataResolver {

    constructor(
        private shapesApiService: ShapesApiService,
        routerService: RouterService,
    ) {
        super(routerService);
    }

    resolveData() {
        return this.shapesApiService.getRectangle();
    }

}