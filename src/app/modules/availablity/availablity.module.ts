import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AvailablityRoutingModule } from './availablity-routing.module';
import { AvailablityComponent } from './availablity.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

@NgModule({
  declarations: [AvailablityComponent],
  imports: [
    CommonModule,
    AvailablityRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule.forRoot(),
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
  ]
})
export class AvailablityModule { }
