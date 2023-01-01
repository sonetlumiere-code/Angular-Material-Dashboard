import { Component } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { DialogExampleComponent } from './dialog-example/dialog-example.component'

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  constructor(public dialog: MatDialog) { }

  openDialog(){
    let dialogRef = this.dialog.open(DialogExampleComponent, { data: { name: 'Vishwas' } })

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`)
    })
  }

}
