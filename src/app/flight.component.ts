import { Component, OnInit, Input, Output, EventEmitter, ɵdetectChanges, ViewEncapsulation } from '@angular/core';
import { Flight } from './flight';

@Component({
  templateUrl: './flight.component.html',
  styles: [`.x { color: green }`]
})
export class FlightComponent {

  @Input() flight: Flight;
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();
  @Input() info;
  
  toggle() {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
    ɵdetectChanges(this);
  }

}