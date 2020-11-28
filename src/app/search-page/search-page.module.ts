import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule, MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';

import { SearchPageRouteModule } from './search-page-route.module';


import { SearchPageComponent } from './search-page.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    SearchPageRouteModule
  ],
  declarations: [SearchPageComponent]
})
export class SearchPageModule {}
