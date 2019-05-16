import { Component } from '@angular/core';

// This component is used to demonstrate how to
// use sub components. For this, it has to be
// registered with an NgModule 

@Component({
  selector: 'title-comp',
  template: '<h2>Flight Info</h2>'
})
export class TitleComp {
}
