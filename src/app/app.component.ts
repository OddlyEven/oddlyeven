import { Component } from '@angular/core';
import { ShapePreferences } from './core/interfaces/shape-preferences';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public shapePreferences = new ShapePreferences();
  public showPrefPanel = true;

  public preferenceChanged(preferences: ShapePreferences) {
    this.shapePreferences = { ...preferences };
  }
}
