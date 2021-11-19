import { Shape } from './shape';

export class Triangle extends Shape {
  public constructor(shapeSize: number) {
    super('triangle', shapeSize);
  }

  public getTemplate(): string {
    const { width, height } = this.screenSize;

    const halfSize = this.shapeSize / 2;
    const xCount = Math.ceil(width / this.shapeSize) + 1;

    const screenTemplate = [...Array(Math.ceil(height / this.shapeSize)).keys()]
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
