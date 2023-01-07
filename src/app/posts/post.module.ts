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

@NgModule({
  declarations: [    
    NewpostComponent,
    PostfeedComponent,
    PostComponent,
    TestComponent,
    PostDialogComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    TextFieldModule,
    FormsModule
  ],
  exports: [
    NewpostComponent,
    PostfeedComponent,
    PostComponent
  ]
})
export class PostModule { }
