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
  postList: PostModel[];
  
   

  constructor(PostService: PostService )
   { 
      
       this.postList = PostService.getPosts();
        

  }
  

   ngOnInit(): void {
  }


}
