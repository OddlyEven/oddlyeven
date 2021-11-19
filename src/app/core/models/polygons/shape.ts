import { Shapes } from '../../constants/shapes';
import { Point } from '../../interfaces/point';
import { ScreenSize } from '../../interfaces/screen-size';

export abstract class Shape {
  private readonly animateElTemplate = 'animate attributeType="CSS" attributeName="fill" values="violet;indigo;blue;green;yellow;orange;red;violet" begin="mouseenter" dur="500ms"></animate';
  private readonly polygonElAttrs = 'stroke="rgba(10,10,10)" fill="rgb(20,20,20)" stroke-opacity="1" stroke-width="0.75" fill-opacity="1" onmousemove="if (event.buttons > 0) {this.style.fillOpacity = 0; this.style.strokeOpacity = 0.1; this.animate = null;}"';

  public constructor(public readonly shapeName: Shapes, public readonly shapeSize: number) { }

  public get screenSize(): ScreenSize {
    return window.screen;
  }

  public abstract getTemplate(): string;

  public createShapeTemplate(...points: Point[]): string {
    const coords = points.map((point) => `${point.x},${point.y}`).join(' ');

    return this.createElTemplate(coords);
  }

  private createElTemplate(coords: string): string {
    return `<polygon points="${coords}" ${this.polygonElAttrs}><${this.animateElTemplate}></polygon>`;
  }
}
