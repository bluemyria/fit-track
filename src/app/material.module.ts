import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule,
  MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatSidenavModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSidenavModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSidenavModule
  ]
})
export class MaterialModule {}
