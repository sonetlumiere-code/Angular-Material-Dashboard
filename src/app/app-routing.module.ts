import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { ButtonsComponent } from './components/pages/buttons/buttons.component'
import { TypographyComponent } from './components/pages/typography/typography.component'
import { ButtontoggleComponent } from './components/pages/buttontoggle/buttontoggle.component'
import { IconComponent } from './components/pages/icon/icon.component'
import { BadgeComponent } from './components/pages/badge/badge.component'
import { ProgressspinnerComponent } from './components/pages/progressspinner/progressspinner.component'
import { MenuComponent } from './components/pages/menu/menu.component'
import { ListComponent } from './components/pages/list/list.component'
import { GridlistComponent } from './components/pages/gridlist/gridlist.component'
import { ExpansionpanelComponent } from './components/pages/expansionpanel/expansionpanel.component'
import { CardsComponent } from './components/pages/cards/cards.component'
import { TabsComponent } from './components/pages/tabs/tabs.component'
import { StepperComponent } from './components/pages/stepper/stepper.component'
import { InputComponent } from './components/pages/input/input.component'
import { SelectComponent } from './components/pages/select/select.component'
import { AutocompleteComponent } from './components/pages/autocomplete/autocomplete.component'
import { CheckboxComponent } from './components/pages/checkbox/checkbox.component'
import { RadiobuttonComponent } from './components/pages/radiobutton/radiobutton.component'
import { DatepickerComponent } from './components/pages/datepicker/datepicker.component'
import { TooltipComponent } from './components/pages/tooltip/tooltip.component'
import { SnackbarComponent } from './components/pages/snackbar/snackbar.component'
import { DialogComponent } from './components/pages/dialog/dialog.component'
import { TableComponent } from './components/pages/table/table.component'
import { VirtualscrollingComponent } from './components/pages/virtualscrolling/virtualscrolling.component'

const routes: Routes = [
  { path: 'buttons', component: ButtonsComponent },
  { path: 'typo', component: TypographyComponent },
  { path: 'toggle', component: ButtontoggleComponent },
  { path: 'icons', component: IconComponent },
  { path: 'badges', component: BadgeComponent },
  { path: 'spinner', component: ProgressspinnerComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'list', component: ListComponent },
  { path: 'grid', component: GridlistComponent },
  { path: 'expansion', component: ExpansionpanelComponent },
  { path: 'card', component: CardsComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'stepper', component: StepperComponent },
  { path: 'input', component: InputComponent },
  { path: 'select', component: SelectComponent },
  { path: 'autocomplete', component: AutocompleteComponent },
  { path: 'checkbox', component: CheckboxComponent },
  { path: 'radiobutton', component: RadiobuttonComponent },
  { path: 'datepicker', component: DatepickerComponent },
  { path: 'tooltip', component: TooltipComponent },
  { path: 'snackbar', component: SnackbarComponent },
  { path: 'dialog', component: DialogComponent },
  { path: 'table', component: TableComponent },
  { path: 'virtualscrolling', component: VirtualscrollingComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
