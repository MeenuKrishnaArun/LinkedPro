import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { PostModel } from 'src/app/model/post';
import { PostService } from 'src/app/posts/services/post.service';

@Component({
  selector: 'app-postfeed',
  templateUrl: './postfeed.component.html',
  styleUrls: ['./postfeed.component.css']
})
export class PostfeedComponent implements OnInit {
  
  postList!:PostModel[];
  postService: PostService;
   

  constructor(postService: PostService )
   { 

    this.postService = postService;
    this.refreshPostList();       
    this.postService.postListUpdatedEvent.subscribe(item => {this.refreshPostList();})
    
  }
  
  refreshPostList()
  {
    this.postList = this.postService.getPosts();
  
  }

   ngOnInit(): void {
  }


}
