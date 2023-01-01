import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MaterialModule } from './material/material.module'
import { ScrollingModule } from '@angular/cdk/scrolling'

import { ToolbarComponent } from './components/nav/toolbar/toolbar.component'
import { SidenavComponent } from './components/nav/sidenav/sidenav.component'

import { TypographyComponent } from './components/pages/typography/typography.component'
import { ButtonsComponent } from './components/pages/buttons/buttons.component'
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
import { DialogExampleComponent } from './components/pages/dialog/dialog-example/dialog-example.component'
import { TableComponent } from './components/pages/table/table.component'
import { VirtualscrollingComponent } from './components/pages/virtualscrolling/virtualscrolling.component'

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ToolbarComponent,
    TypographyComponent,
    ButtonsComponent,
    ButtontoggleComponent,
    IconComponent,
    BadgeComponent,
    ProgressspinnerComponent,
    MenuComponent,
    ListComponent,
    GridlistComponent,
    ExpansionpanelComponent,
    CardsComponent,
    TabsComponent,
    StepperComponent,
    InputComponent,
    SelectComponent,
    AutocompleteComponent,
    CheckboxComponent,
    RadiobuttonComponent,
    DatepickerComponent,
    TooltipComponent,
    SnackbarComponent,
    DialogComponent,
    DialogExampleComponent,
    TableComponent,
    VirtualscrollingComponent
  ],
  entryComponents: [
    DialogExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
