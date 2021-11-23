import { Shapes } from '../../constants/shapes';
import { ShapeBase } from './shape-base';

export class Triangle extends ShapeBase {
  public constructor(shapeSize: number) {
    super(Shapes.triangle, shapeSize);
  }

  public getTemplate(): string {
    const { width, height } = this.screenSize;

    const xCount = Math.ceil(width / this.shapeSize) + 1;
    const yCount = Math.ceil(height / (this.shapeSize / 1.35));

    const halfSize = this.shapeSize / 2;

    const screenTemplate = [...Array(yCount).keys()]
      .map((y) => {
        const yStart = y * this.shapeSize;
        const yEnd = ((y * this.shapeSize)) + this.shapeSize;

        return [...Array(xCount).keys()]
          .map((x) => {
            const xStart = (x * this.shapeSize) - halfSize;
            const xMid = xStart + (this.shapeSize / 2);
            const xEnd = xStart + this.shapeSize;

            return [
              this.createShapeTemplate({ x: xMid, y: yStart }, { x: xStart, y: yEnd }, { x: xEnd, y: yEnd }),
              this.createShapeTemplate({ x: xEnd, y: yEnd }, { x: xMid, y: yStart }, { x: this.shapeSize + xMid, y: yStart })
            ].join('');
          }).join('');
      }
      );

    return screenTemplate.join('');
  }
}
