import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Rectangle } from "@models/rectangle.interface";
import { Observable } from "rxjs";

export interface AbstractShapesApiService {
    getRectangle(): Observable<Rectangle>;
    saveRectangle(rectangle: Rectangle): Observable<void>;
}

@Injectable({ providedIn: 'root' })
export class ShapesApiService implements AbstractShapesApiService {
    constructor(private httpClient: HttpClient) { }

    getRectangle(): Observable<Rectangle> {
        return this.httpClient.get<Rectangle>(`/shape/rectangle`);
    }
    saveRectangle(rectangle: Rectangle): Observable<void> {
        return this.httpClient.post<void>('/shape/rectangle', rectangle);
    }
}