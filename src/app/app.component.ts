import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { GrafcaBarraComponent } from './grafca-barra/grafca-barra.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, GrafcaBarraComponent],
})
export class AppComponent {
  constructor() {}
}
