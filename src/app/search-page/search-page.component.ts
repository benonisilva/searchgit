import { Fault } from './../services/api-gen/models/fault';
import { UserInfo } from './../services/api-gen/models/user-info';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SearchApiService } from '../services/api/search-api.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  searchResult$: Observable<UserInfo>;
  readonly FIELD_SEARCH = 'search';

  public form: FormGroup;
  constructor(private fb: FormBuilder, private searchApi: SearchApiService) { }

  ngOnInit(): void {
    this.constructForm();
  }

  constructForm() {
    this.form = this.fb.group({
      [this.FIELD_SEARCH]: this.fb.control(null, Validators.required)
    });
  }

  onSubmit() {
    if (this.form.invalid) { return; }
    this.searchResult$ = this.searchApi.getUser(this.form.get(this.FIELD_SEARCH).value);
    this.form.reset();
  }

}
