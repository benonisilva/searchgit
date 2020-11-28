import { RepoPages } from 'src/app/model/repo-pages';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SearchPageComponent } from './search-page.component';
import { MatIconModule, MatInputModule, MatCardModule } from '@angular/material';
import { SearchApiService } from '../services/api/search-api.service';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SearchPageRouteModule } from './search-page-route.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserInfo } from '../services/api-gen/models';

describe('SearchPageComponent', () => {
  let component: SearchPageComponent;
  let fixture: ComponentFixture<SearchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatInputModule,
        MatCardModule
      ],
      declarations: [ SearchPageComponent ],
      providers: [
        {
          provide: SearchApiService,
          useValue: {
            getUser: () => of({ id: 1, avatar_url: '', name: 'das', repos_url: '', starred_url: '' } as UserInfo)
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('when form valid and search service returno show card', async () => {
    expect(component).toBeTruthy();
    component.form.get(component.FIELD_SEARCH).setValue('dsadsa');
    component.onSubmit();
    const card = fixture.debugElement.query(By.css('example-card'));
    expect(card).toBeDefined();
  });
});
