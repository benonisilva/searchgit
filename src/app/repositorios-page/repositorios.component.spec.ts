
import { RouterTestingModule } from '@angular/router/testing';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';




import { RepositoriosComponent } from './repositorios.component';
import { MatIconModule, MatInputModule, MatCardModule, MatListModule, MatDividerModule, MatButtonModule } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { RepoPages } from '../model/repo-pages';
import { RepoInfo } from '../services/api-gen/models';


describe('RepositoriosComponent', () => {
  let component: RepositoriosComponent;
  let fixture: ComponentFixture<RepositoriosComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        RouterTestingModule,
        MatIconModule,
        MatInputModule,
        MatCardModule,
        MatListModule,
        MatDividerModule,
        MatButtonModule,
      ],
      declarations: [ RepositoriosComponent ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            data: of({data: {data: { repos: { name: 'dsadsa' } as RepoInfo } as  RepoPages}})
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init', () => {
    component.ngOnInit();
  });

  it('should show list', async() => {
    component.ngOnInit();
    const list = fixture.debugElement.query(By.css('repo-list'));
    expect(list).toBeDefined();
  });
});
