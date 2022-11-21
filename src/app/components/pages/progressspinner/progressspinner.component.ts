import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progressspinner',
  templateUrl: './progressspinner.component.html',
  styleUrls: ['./progressspinner.component.scss']
})
export class ProgressspinnerComponent implements OnInit {

  constructor() { }

  showSpinner = false;

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.showSpinner = true;
    setTimeout(() => this.showSpinner = false, 3000)
  }

}
