import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { Enum, Shapes } from 'src/app/core/constants/shapes';
import { ShapePreferences } from 'src/app/core/interfaces/shape-preferences';

@Component({
  selector: 'app-preference-panel',
  templateUrl: './preference-panel.component.html',
  styleUrls: ['./preference-panel.component.scss']
})
export class PreferencePanelComponent implements AfterViewInit {
  @Input() preferences!: ShapePreferences;
  @Input() isVisible = true;
  @Output() preferenceChange = new EventEmitter<ShapePreferences>();

  public shapes = Enum.names(Shapes);
  public sizeRange = [...Array(13).keys()].map((key) => (key + 3) * 10);
  public selectedShape!: Shapes;
  public selectedSize!: number;

  public ngAfterViewInit(): void {
    setTimeout(() => this.initFields());
  }

  public shapeSelected(evt: any): void {
    this.preferences = { ...this.preferences, shape: evt.target.value };
    this.preferencesChanged();
  }

  public sizeSelected(evt: any): void {
    this.preferences = { ...this.preferences, size: Number(evt.target.value) };
    this.preferencesChanged();
  }

  public preferencesChanged(): void {
    this.preferenceChange.emit(this.preferences);
  }

  private initFields(): void {
    this.selectedShape = this.preferences.shape;
    this.selectedSize = this.preferences.size;
  }
}
