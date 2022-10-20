import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-input-datepicker',
  templateUrl: './input-datepicker.component.html',
  styleUrls: ['./input-datepicker.component.css']
})
export class InputDatepickerComponent {
  constructor(private route: Router) {
  }

  chooseDateForm = new FormGroup({
    fromDate: new FormControl('', [
      Validators.pattern('yyyy-MM-dd')
    ]),
    toDate: new FormControl('', [
      Validators.pattern('yyyy-MM-dd')
    ])
  })

  searchByDates = () => {
    let fromDateValue = this.chooseDateForm.controls['fromDate'].value;
    let toDateValue = this.chooseDateForm.controls['toDate'].value;

    return this.route.navigate([`/from/${fromDateValue}/to/${toDateValue}`])
  }
}
