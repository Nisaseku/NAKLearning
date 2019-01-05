import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { coursesComponent } from './courses/courses.component';
import { coursesRoutingModule } from './courses-routing.module';

@NgModule({
  imports: [
    CommonModule,
    coursesRoutingModule
  ],
  declarations: [
    coursesComponent
  ]
})
export class coursesModule { }
