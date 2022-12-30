import { Component, Input, OnInit } from '@angular/core';
import { PostModel } from 'src/app/model/post';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post!:PostModel;
    postService:PostService;
      
   constructor(postservice:PostService)
   {
    this.postService=postservice;
   }

   deletePost()
   {
    console.log("Deleting post "+this.post.postId);
    this.postService.deletePost(this.post.postId);
   }

  ngOnInit(): void {

  }

}
