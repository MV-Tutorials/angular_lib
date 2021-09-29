import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms";

@Component({
  selector: 'lib-average-fuel-consumption',
  templateUrl: './avarage-fuel-consuption.component.html',
  styles: []
})
export class AverageFuelConsumptionComponent implements OnInit {

  avaregeConsuptionForm = new FormGroup({
    consuption: new FormControl(''),
    distance: new FormControl(''),
  });

  result = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.result = this.avaregeConsuptionForm.value.consuption / this.avaregeConsuptionForm.value.distance
  }

}
