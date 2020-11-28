import { RepoPages } from 'src/app/model/repo-pages';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-repositorios',
  templateUrl: './repositorios.component.html',
  styleUrls: ['./repositorios.component.scss']
})
export class RepositoriosComponent implements OnInit {

  data$: Observable<RepoPages>;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.data$ = this.route.data.pipe(
     map(data => data.data as RepoPages)
    );
  }

}
