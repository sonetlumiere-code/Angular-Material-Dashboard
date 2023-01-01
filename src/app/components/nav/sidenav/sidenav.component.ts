import { Component, OnInit, ViewChild, HostListener } from '@angular/core'
import { MatSidenav } from '@angular/material/sidenav'

interface RouteInfo {
  path: string;
  title: string;
  icon: string
}

export const sidenavRoutes: RouteInfo[] = [
  { path: '/buttons', title: 'Buttons', icon: '' },
  { path: '/typo', title: 'Typography', icon: '' },
  { path: '/toggle', title: 'Button Toggle', icon: '' },
  { path: '/icons', title: 'Icons', icon: '' },
  { path: '/badges', title: 'Badges', icon: '' },
  { path: '/spinner', title: 'Spinner', icon: '' },
  { path: '/menu', title: 'Menu', icon: '' },
  { path: '/list', title: 'List', icon: '' },
  { path: '/grid', title: 'Grid', icon: '' },
  { path: '/expansion', title: 'Expansion Panel', icon: '' },
  { path: '/card', title: 'Cards', icon: '' },
  { path: '/tabs', title: 'Tabs', icon: '' },
  { path: '/stepper', title: 'Stepper', icon: '' },
  { path: '/input', title: 'Input', icon: '' },
  { path: '/select', title: 'Select', icon: '' },
  { path: '/autocomplete', title: 'Autocomplete', icon: '' },
  { path: '/checkbox', title: 'Checkbox', icon: '' },
  { path: '/radiobutton', title: 'Radio Button', icon: '' },
  { path: '/datepicker', title: 'Date Picker', icon: '' },
  { path: '/tooltip', title: 'Tooltip', icon: '' },
  { path: '/snackbar', title: 'Snackbar', icon: '' },
  { path: '/dialog', title: 'Dialog', icon: '' },
  { path: '/table', title: 'Table', icon: '' },
  { path: '/virtualscrolling', title: 'Virtual Scrolling', icon: '' }
]

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @HostListener('window:resize', ['$event'])
  onResize($event:any) {
    this.windowInnerWidth = $event.target.innerWidth
    if(this.windowInnerWidth > 1200) {
      this.MatSidenav['_mode'] = 'side'
      this.MatSidenav.open()
    } else {
      this.MatSidenav['_mode'] = 'push'
      this.MatSidenav.close()
    }
  }

  @ViewChild(MatSidenav)
    MatSidenav!: MatSidenav

  windowInnerWidth!: number
  menuItems: any[] = []

  constructor() {
    this.windowInnerWidth = window.innerWidth
  }

  ngOnInit(): void {
    this.menuItems = sidenavRoutes.filter(menuItem => menuItem)
  }

  toggleSidenav(): void {
    this.MatSidenav.toggle()
    let a = 1
    let b = 2
    if (a == b) {
      console.log('asd')
    }
    const obj = { a: 'a', b: 'b' }
  }

}
