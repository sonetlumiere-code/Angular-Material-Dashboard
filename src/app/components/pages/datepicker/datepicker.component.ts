import { Component } from '@angular/core'

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent {

  minDate = new Date()
  maxDate = new Date(2021, 11, 15)

  constructor() { }

  dateFilter = () => {
    const date = new Date()
    const day = date.getDay()
    return day != 0 && day != 6
  }

}
