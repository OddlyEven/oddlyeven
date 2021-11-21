import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SnakeOverlayComponent } from './features/snake-overlay/snake-overlay.component';
import { PreferencePanelComponent } from './features/preference-panel/preference-panel.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    SnakeOverlayComponent,
    PreferencePanelComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
