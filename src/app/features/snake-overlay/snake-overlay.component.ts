import { AfterViewInit, Component, Input, Renderer2, SimpleChange, ViewChild } from '@angular/core';
import { ShapePreferences } from 'src/app/core/interfaces/shape-preferences';
import { ShapeFactoryService } from 'src/app/core/services/shape-factory.service';

@Component({
  selector: 'app-snake-overlay',
  templateUrl: './snake-overlay.component.html',
  styleUrls: ['./snake-overlay.component.scss']
})
export class SnakeOverlayComponent implements AfterViewInit {
  @Input() public shapePreferences!: ShapePreferences;

  @ViewChild('overlayContainer') private overlayContainer!: { nativeElement: any; };

  public constructor(private readonly shapeSvc: ShapeFactoryService, private readonly renderer2: Renderer2) {
  }

  public ngAfterViewInit(): void {
    setTimeout(() => this.createOverlay(this.shapePreferences));
  }

  public ngOnChanges(changes: { shapePreferences: SimpleChange }): void {
    if (changes.shapePreferences.firstChange === false) {
      this.overlayContainer.nativeElement.innerHTML = '';
      this.createOverlay(changes.shapePreferences.currentValue);
    }
  }

  private createOverlay(preferences: ShapePreferences): void {
    const shape = this.shapeSvc.getShape(preferences);
    const { width, height } = shape.screenSize;

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    svg.setAttribute('id', 'svgEl');
    svg.setAttribute('viewBox', `0 0 ${width} ${height + 275}`);
    svg.innerHTML = shape.getTemplate();

    this.renderer2.appendChild(this.overlayContainer.nativeElement, svg);
  }
}
