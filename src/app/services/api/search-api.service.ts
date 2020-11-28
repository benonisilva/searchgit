import { RepoInfo } from './../api-gen/models/repo-info';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { BasicUserInfoService } from '../api-gen/services';

import { UserInfo } from '../api-gen/models';
import { RepoPages } from 'src/app/model/repo-pages';
import { StrictHttpResponse } from '../api-gen/strict-http-response';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchApiService {

  constructor(private userGitApi: BasicUserInfoService) { }

  public getUser(user: string): Observable<UserInfo> {
    return this.userGitApi.getUserInfo(user);
  }

  public getUserRepo(user: string, page?: string): Observable<RepoPages> {
    const params = {
      USERGITHUB: user,
      page
    } as BasicUserInfoService.GetRepoInfoParams;
    return this.userGitApi.getRepoInfoResponse(params).pipe(
      map(result => this.mapToRepoPages(result))
    );
  }

  public getUserStarred(user: string, page?: string): Observable<RepoPages> {
    const params = {
      USERGITHUB: user,
      page
    } as BasicUserInfoService.GetRepoInfoParams;
    return this.userGitApi.getStarredResponse(params).pipe(
      map(result => this.mapToRepoPages(result))
    );
  }

  private mapToRepoPages(response: StrictHttpResponse<RepoInfo>) {
      const retVal: RepoPages = {
        repos: response.body as RepoInfo[]
      };
      return retVal;
  }

}
