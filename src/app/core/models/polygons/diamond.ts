import { Shapes } from '../../constants/shapes';
import { ShapeBase } from './shape-base';

export class Diamond extends ShapeBase {
  public constructor(shapeSize: number) {
    super(Shapes.diamond, shapeSize);
  }

  public getTemplate(): string {
    const { width, height } = this.screenSize;

    const xCount = Math.ceil(width / this.shapeSize) + 1;
    const yCount = Math.ceil(height / (this.shapeSize / 2.75));

    const halfSize = this.shapeSize / 2;

    const screenTemplate = [...Array(yCount).keys()]
      .map((y) => {
        const y1 = (y * halfSize) - halfSize;
        const y2 = y1 + halfSize;
        const y3 = y1 + this.shapeSize;

        const xOffset = halfSize * (y % 2) * -1;

        return [...Array(xCount).keys()]
          .map((x) => {
            const x1 = (x * this.shapeSize) + xOffset;
            const x2 = x1 + halfSize;
            const x3 = x1 + this.shapeSize;

            return this.createShapeTemplate(
              { x: x2, y: y1 },
              { x: x1, y: y2 },
              { x: x2, y: y3 },
              { x: x3, y: y2 }
            );
          }).join('');
      }
      );

    return screenTemplate.join('');
  }
}
