import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { profileComponent } from './profile/profile.component';
import { profileRoutingModule } from './profile-routing.module';

@NgModule({
  imports: [
    CommonModule,
    profileRoutingModule
  ],
  declarations: [
    profileComponent
  ]
})
export class profileModule { }
