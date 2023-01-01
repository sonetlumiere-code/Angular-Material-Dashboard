import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core'
import { Location } from '@angular/common'
import { sidenavRoutes } from '../sidenav/sidenav.component'
import { ThemeService } from 'src/app/services/theme/theme.service'

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() windowInnerWidth!: number
  @Output() toggleEvent = new EventEmitter<string>()
  menuItems: any[] = []
  location: Location
  isDarkTheme: boolean = false

  constructor(
    location: Location,
    private themeService: ThemeService
  ) {
    this.location = location
  }

  ngOnInit(): void {
    this.themeService.isDarkTheme.subscribe(darkTheme => this.isDarkTheme = darkTheme)
    this.menuItems = sidenavRoutes.filter(listTitle => listTitle)
  }

  toggleSidenav(): void {
    this.toggleEvent.emit()
  }

  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked)
  }

  getTitle() {
    let extUrl = this.location.prepareExternalUrl(this.location.path())
    if(extUrl.charAt(0) === '#'){
      extUrl = extUrl.slice(1)
    }
    for(let menuItem of this.menuItems){
      if(menuItem.path === extUrl){
        return menuItem.title
      }
    }
    return ''
  }

}
