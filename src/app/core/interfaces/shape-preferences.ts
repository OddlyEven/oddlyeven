import { Shapes } from "../constants/shapes";

export class ShapePreferences {
  public shape: Shapes;
  public size: number;

  public constructor() {
    this.shape = Shapes.diamond;
    this.size = 50;
  }
}
