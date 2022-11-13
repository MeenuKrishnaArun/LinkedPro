import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewpostComponent } from './newpost/newpost.component';
import { PostfeedComponent } from './postfeed/postfeed.component';
import { PostComponent } from './post/post.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [    
    NewpostComponent,
    PostfeedComponent,
    PostComponent,
    TestComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NewpostComponent,
    PostfeedComponent,
    PostComponent
  ]
})
export class PostModule { }
