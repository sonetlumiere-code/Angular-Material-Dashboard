import { Component } from '@angular/core'

@Component({
  selector: 'app-virtualscrolling',
  templateUrl: './virtualscrolling.component.html',
  styleUrls: ['./virtualscrolling.component.scss']
})
export class VirtualscrollingComponent {

  numbers: number[] = []

  constructor() {
    for(let i = 0; i < 100; i++){
      this.numbers.push(i)
    }
  }

}
