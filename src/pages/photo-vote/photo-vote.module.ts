import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhotoVotePage } from './photo-vote';

@NgModule({
  declarations: [
    PhotoVotePage,
  ],
  imports: [
    IonicPageModule.forChild(PhotoVotePage),
  ],
})
export class PhotoVotePageModule {}
