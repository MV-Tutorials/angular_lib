import { NgModule } from '@angular/core';
import { AverageFuelConsumptionComponent } from './average-fuel-consumption.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AverageFuelConsumptionComponent
  ],
  imports: [
    ReactiveFormsModule
  ],
  exports: [
    AverageFuelConsumptionComponent
  ]
})
export class AverageFuelConsumptionModule { }
