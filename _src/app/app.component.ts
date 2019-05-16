import { Component, Input, ɵdetectChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() title = 'ivy-elements-manual';

  ok() {
    ɵdetectChanges(this);
  }
}
