import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { LoadingBarService } from "@core/loading-bar/loading-bar.service";
import { NotificationService } from "@core/notification/notification.service";
import { Rectangle } from "@models/rectangle.interface";
import { ShapesApiService } from "@services/api/shapes-api.service";
import { ResizeEvent } from 'angular-resizable-element';
import { Observable } from "rxjs";
import { finalize, tap } from "rxjs/operators";

@Component({
  templateUrl: './rectangle.page.html',
  styleUrls: ['./rectangle.page.scss'],
})
export class RectanglePage {

  minSize = 22;

  get perimeter(): number {
    return 2 * (this.width + this.height);
  }

  get width(): number {
    return this.rectangleData.width < this.minSize ? this.minSize : this.rectangleData.width
  }

  get height(): number {
    return this.rectangleData.height < this.minSize ? this.minSize : this.rectangleData.height;
  }

  rectangleData: Rectangle = this.activatedRoute.snapshot.data.rectangle

  isSaving = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private shapesApiService: ShapesApiService,
    private loadingBarService: LoadingBarService,
    private notificationService: NotificationService,
  ) {
  }

  onResizeEnd(event: ResizeEvent): void {
    this.rectangleData.width = event.rectangle.width;
    this.rectangleData.height = event.rectangle.height;
    if (!this.isSaving)
      this.saveRectangle(this.rectangleData).subscribe();
  }

  validate(event: ResizeEvent): boolean {
    return !this.isSaving && this.isValidSize(event.rectangle);
  }
  
  private isValidSize(rectangle: any): boolean {
    return rectangle.width >= this.minSize && rectangle.height >= this.minSize;
  }

  private saveRectangle(rectangle: Rectangle): Observable<void> {
    this.isSaving = true;
    this.loadingBarService.start();
    return this.shapesApiService.saveRectangle(rectangle).pipe(
      finalize(() => {
        this.isSaving = false;
        this.loadingBarService.stop();
      }),
      tap(() => {
        this.notificationService.success('Rectangle saved successfully!');
      }),
    );
  }
}