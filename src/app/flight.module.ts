import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightComponent } from './flight.component';
import { TitleComp } from './title-comp';

@NgModule({
  imports: [CommonModule],
  declarations: [FlightComponent, TitleComp]
})
export class FlightModule {
}
