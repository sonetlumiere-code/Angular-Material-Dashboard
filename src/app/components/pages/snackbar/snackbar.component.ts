import { Component } from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar'
import { CustomSnackBarComponent } from './custom-snackbar/custom-snackbar.component'

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent {

  constructor(private snackBar: MatSnackBar) { }

  openSnackBar(message:string, action:string){
    let snackBarRef = this.snackBar.open(message, action, { duration: 2000 })

    snackBarRef.afterDismissed().subscribe(() => {
      console.log('The snackbar was dismissed')
    })

    snackBarRef.onAction().subscribe(() => {
      console.log('The snackbar action was triggered!')
    })
  }

  openCustomSnackBar(){
    this.snackBar.openFromComponent(CustomSnackBarComponent, { duration: 2000 })
  }

}
