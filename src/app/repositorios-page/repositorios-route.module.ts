import { ResolverRepositorios } from './resolver-repositorios';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepositoriosComponent } from './repositorios.component';

const routes: Routes = [
  {
    path: '',
    component: RepositoriosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepositoriosRouteModule { }
