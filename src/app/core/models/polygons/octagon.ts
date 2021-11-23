import { Shapes } from '../../constants/shapes';
import { ShapeBase } from './shape-base';

export class Octagon extends ShapeBase {
  public constructor(shapeSize: number) {
    super(Shapes.octagon, shapeSize);
  }

  public getTemplate(): string {
    const { width, height } = this.screenSize;

    const a = this.shapeSize / 3;
    const c = Math.sqrt(Math.pow(a, 2) + Math.pow(a, 2));
    const diameter = a + a + c;

    const xCount = Math.ceil(width / diameter);
    const yCount = Math.ceil(height / c);

    const screenTemplate = [...Array(yCount).keys()]
      .map((y) => {
        const y1 = (y * a) + (y * diameter / 2.5) - c;
        const y2 = y1 + a;
        const y3 = y2 + c;
        const y4 = y3 + a;

        const xOffset = (y % 2) * (c + a);

        return [...Array(xCount).keys()]
          .map((x) => {
            const x2 = (x * (diameter + c)) - xOffset;
            const x1 = x2 + a;
            const x3 = x1 + c;
            const x4 = x3 + a;

            return this.createShapeTemplate(
              { x: x1, y: y1 },
              { x: x2, y: y2 },
              { x: x2, y: y3 },
              { x: x1, y: y4 },
              { x: x3, y: y4 },
              { x: x4, y: y3 },
              { x: x4, y: y2 },
              { x: x3, y: y1 },
            );
          }).join('');
      }
      );

    return screenTemplate.join('');
  }
}
