import { Component } from '@angular/core';
import { ShapePreferences } from './core/interfaces/shape-preferences';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public shapePreferences: ShapePreferences = { shape: 'diamond', size: 60 };
  public showPrefPanel = true;

  public preferenceChanged(preferences: ShapePreferences) {
    console.log('show', this.showPrefPanel);
    this.shapePreferences = { ...preferences };
  }
}
