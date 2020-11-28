import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { RepoPages } from '../model/repo-pages';
import { SearchApiService } from '../services/api/search-api.service';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class ResolverRepositorios implements Resolve<RepoPages> {

   constructor(private searchApi: SearchApiService) { }

   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<RepoPages> {
      const user: string = route.params.user;
      return this.searchApi.getUserRepo(user);
   }

}
