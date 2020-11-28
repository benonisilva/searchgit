import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonModule, MatIconModule, MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card'
import {MatListModule} from '@angular/material/list';;
import {MatDividerModule} from '@angular/material/divider';

import { RepositoriosRouteModule } from './repositorios-route.module';

import { RepositoriosComponent } from './repositorios.component';



@NgModule({
  imports: [
    CommonModule,

    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatButtonModule,

    RepositoriosRouteModule
  ],
  declarations: [RepositoriosComponent]
})
export class RepositoriosModule {}
