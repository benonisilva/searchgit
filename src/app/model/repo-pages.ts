import { RepoInfo } from './../services/api-gen/models/repo-info';
export class RepoPages {

  page?: number;
  perpage?: number;
  max?: number;
  repos: Array<RepoInfo>;
}
