import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CodeBoxComponent } from './components/code-box/code-box.component';
import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './components/list/list.component';
import { PageComponent } from './components/page/page.component';
import { TranslationPipe } from './pipe/translation.pipe';
import { AppModule } from '../app.module';
import { LocalizedTablePipe } from './pipe/localized-table.service';
import { ComponentCommunicationService } from './services/component-communication-service.service';


@NgModule({
  declarations: [
    CodeBoxComponent,
    HeaderComponent,
    ListComponent,
    PageComponent,
    TranslationPipe,
    LocalizedTablePipe,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    
  ],
  providers : [
    
  ],
  exports : [
    HeaderComponent,
  ]
})
export class CoreModule { }
