import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhotoHomePage } from './photo-home';

@NgModule({
  declarations: [
    PhotoHomePage,
  ],
  imports: [
    IonicPageModule.forChild(PhotoHomePage),
  ],
})
export class PhotoHomePageModule {}
