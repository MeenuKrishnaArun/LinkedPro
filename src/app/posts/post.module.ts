import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewpostComponent } from './newpost/newpost.component';
import { PostfeedComponent } from './postfeed/postfeed.component';
import { PostComponent } from './post/post.component';
import { TestComponent } from './test/test.component';
import { PostDialogComponent } from './post-dialog/post-dialog.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {TextFieldModule} from '@angular/cdk/text-field';
import { FormsModule } from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { CommentfeedComponent } from './commentfeed/commentfeed.component';
import { AddcommentComponent } from './addcomment/addcomment.component';
import { CommentComponent } from './comment/comment.component';
import { PostsummaryComponent } from './postsummary/postsummary.component';
import { PopupreactionComponent } from './popupreaction/popupreaction.component';
import { PopupcommentComponent } from './popupcomment/popupcomment.component';





@NgModule({
  declarations: [    
    NewpostComponent,
    PostfeedComponent,
    PostComponent,
    TestComponent,
    PostDialogComponent,
    CommentfeedComponent,
    AddcommentComponent,
    CommentComponent,
    PostsummaryComponent,
    PopupreactionComponent,
    PopupcommentComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    TextFieldModule,
    FormsModule,
    MatChipsModule,
    MatMenuModule,
    MatIconModule
  ],
  exports: [
    NewpostComponent,
    PostfeedComponent,
    PostComponent
  ]
})
export class PostModule { }
