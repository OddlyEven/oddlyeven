import { Injectable } from '@angular/core';
import { Shapes } from '../constants/shapes';
import { ShapePreferences } from '../interfaces/shape-preferences';
import { Diamond, Hexagon, Shape, Triangle } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ShapeFactoryService {
  public getShape(preferences: ShapePreferences): Shape {
    switch (preferences.shape) {
      case Shapes.diamond:
        return new Diamond(preferences.size);
      case Shapes.hexagon:
        return new Hexagon(preferences.size);
      case Shapes.triangle:
        return new Triangle(preferences.size);
      default:
        return undefined as unknown as Shape;
    }
  }
}
