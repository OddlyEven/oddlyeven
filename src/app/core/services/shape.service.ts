import { Injectable } from '@angular/core';
import { ShapePreferences } from '../interfaces/shape-preferences';
import { Diamond, Shape, Triangle } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ShapeService {
  public getShape(preferences: ShapePreferences): Shape {
    switch (preferences.shape) {
      case 'diamond':
        return new Diamond(preferences.size);
      case 'triangle':
        return new Triangle(preferences.size);
      default:
        return undefined as unknown as Shape;
    }
  }
}
