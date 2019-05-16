import { ɵrenderComponent, ɵdetectChanges } from '@angular/core';
import { FlightComponent } from './flight.component';
import { Flight } from './flight';
// Manual Custom Elements Wrapper that uses Ivy to render
// Angular Component
// The APIs are current private and can change
// The upcoming version of Angular Elements will automate 
// this task
export class FlightInfoElement extends HTMLElement {
  private comp: FlightComponent;
  get flight(): Flight {
    return this.comp.flight;
  }
  set flight(flight: Flight) {
    this.comp.flight = flight;
    ɵdetectChanges(this.comp);
  }
  get selected(): boolean {
    return this.comp.selected;
  }
  set selected(selected: boolean) {
    this.comp.selected = selected;
    ɵdetectChanges(this.comp);
  }
  static get observedAttributes() {
    return ['selected', 'flight'];
  }
  constructor() {
    super();
    this.comp = ɵrenderComponent(FlightComponent, { host: this });
    // Register for the Angular component's events and
    // translate them into events of the custom element
    this.comp.selectedChange.subscribe(e => this.dispatchEvent(new CustomEvent('selected-change', { detail: e })));
  }
  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'selected':
        // string to boolean
        this.selected = newValue === 'true';
        break;
      case 'flight':
        // Normally, complex properties are not mapped
        // to attributes. This is just for demonstration
        // purposes.
        this.flight = JSON.parse(newValue);
        break;
    }
  }
}
