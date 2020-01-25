import {NgModule } from '@angular/core';
import { HideOnscrollDirective } from './hide-onscroll.directive';
export * from "./hide-onscroll.directive";
@NgModule({
  declarations: [
    HideOnscrollDirective
  ],
  exports:[
    HideOnscrollDirective
  ]
})
export class HideOnscrollModule {}
