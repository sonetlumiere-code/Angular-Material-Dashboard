import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openSnackBar(message:string, action:string){
    let snackBarRef = this.snackBar.open(message, action, { duration: 2000 });

    snackBarRef.afterDismissed().subscribe(() => {
      console.log('The snackbar was dismissed');
    });

    snackBarRef.onAction().subscribe(() => {
      console.log('The snackbar action was triggered!');
    })
  }

  openCustomSnackBar(){
    this.snackBar.openFromComponent(CustomSnackBarComponent, { duration: 2000 })
  }

}



@Component({
  selector: 'custom-snackbar',
  template: `<span style='color: orange'>Custom Snackbar</span>`,
  styleUrls: ['./snackbar.component.scss']
})
export class CustomSnackBarComponent {}
