import { Shapes } from '../../constants/shapes';
import { Shape } from './shape';

export class Hexagon extends Shape {
  public constructor(shapeSize: number) {
    super(Shapes.hexagon, shapeSize);
  }

  public getTemplate(): string {
    const { width, height } = this.screenSize;

    const c = this.shapeSize;
    const a = c / 2;
    const b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));

    const screenTemplate = [...Array(Math.ceil(height / b)).keys()]
      .map((y) => {
        const y1 = (y * b) - b;
        const y2 = y1 + b;
        const y3 = y2 + b;

        const xOffset = a * (y % 2) * -3;

        return [...Array(Math.ceil(width / (2 * c))).keys()]
          .map((x) => {
            const x2 = (x * (3 * c)) + xOffset;
            const x1 = x2 + a;
            const x3 = x1 + c;
            const x4 = x3 + a;

            return this.createShapeTemplate(
              { x: x1, y: y1 },
              { x: x2, y: y2 },
              { x: x1, y: y3 },
              { x: x3, y: y3 },
              { x: x4, y: y2 },
              { x: x3, y: y1 },
            );
          }).join('');
      }
      );

    return screenTemplate.join('');
  }
}
