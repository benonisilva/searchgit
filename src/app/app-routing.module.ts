import { RepoInfo } from './services/api-gen/models/repo-info';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { of } from 'rxjs';
import { ResolverRepositorios } from './repositorios-page/resolver-repositorios';
import { StarredRepositorios } from './repositorios-page/resolver-starred';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/search',
    pathMatch: 'full'
  },
  {
    path: 'search',
    loadChildren: './search-page/search-page.module#SearchPageModule'
  },
  {
    path: 'repositorios/:user',
    loadChildren: './repositorios-page/repositorios.module#RepositoriosModule',
    resolve: {
      data: ResolverRepositorios
    }
  },
  {
    path: 'starred/:user',
    loadChildren: './repositorios-page/repositorios.module#RepositoriosModule',
    resolve: {
      data: StarredRepositorios
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
