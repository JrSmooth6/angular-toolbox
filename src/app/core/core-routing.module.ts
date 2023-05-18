import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeBoxComponent } from './components/code-box/code-box.component';
import { ListComponent } from './components/list/list.component';
import { PageComponent } from './components/page/page.component';

const routes: Routes = [
  {path : '', component : ListComponent},
  {path : 'cli', component : PageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  RouterModule],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
