import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CodeBoxComponent } from './components/code-box/code-box.component';
import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './components/list/list.component';
import { PageComponent } from './components/page/page.component';


@NgModule({
  declarations: [
    CodeBoxComponent,
    HeaderComponent,
    ListComponent,
    PageComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports : [
    HeaderComponent,
  ]
})
export class CoreModule { }
