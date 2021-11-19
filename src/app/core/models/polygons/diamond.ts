import { Shape } from './shape';

export class Diamond extends Shape {
  public constructor(shapeSize: number) {
    super('diamond', shapeSize);
  }

  public getTemplate(): string {
    const { width, height } = this.screenSize;
    const halfSize = this.shapeSize / 2;
    const xCount = Math.ceil(width / this.shapeSize) + 1;
    const yCount = Math.ceil(height / (this.shapeSize / 2.5));

    const screenTemplate = [...Array(yCount).keys()]
      .map((y) => {
        const yStart = (y * halfSize) - halfSize;
        const yMid = yStart + halfSize;
        const yEnd = yStart + this.shapeSize;
        const xOffset = halfSize * (y % 2) * -1;

        return [...Array(xCount).keys()]
          .map((x) => {
            const xStart = (x * this.shapeSize) + xOffset;
            const xMid = xStart + halfSize;
            const xEnd = xStart + this.shapeSize;

            return this.createShapeTemplate(
              { x: xMid, y: yStart },
              { x: xStart, y: yMid },
              { x: xMid, y: yEnd },
              { x: xEnd, y: yMid }
            );
          }).join('');
      }
      );

    return screenTemplate.join('');
  }
}
