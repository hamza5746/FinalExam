import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpiresPage } from './expires';

@NgModule({
  declarations: [
    ExpiresPage,
  ],
  imports: [
    IonicPageModule.forChild(ExpiresPage),
  ],
})
export class ExpiresPageModule {}
