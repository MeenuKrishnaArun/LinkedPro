import { Component, OnInit,Input } from '@angular/core';
import {  Comment, PostModel } from 'src/app/model/post';
import { AuthenticationService } from 'src/app/authentication.service';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-addcomment',
  templateUrl: './addcomment.component.html',
  styleUrls: ['./addcomment.component.css']
})
export class AddcommentComponent implements OnInit {
  @Input() postid!:string;
  content:string='';
  postService: PostService;
   
  constructor(postService: PostService, private authService:AuthenticationService)
   { 
     this.postService = postService;    
   }
 
public onValueChange(event: Event): void {
  console.log(event.target);
  this.content=(event.target as any).value;
}

addComment()
{
  
  let comment ={
    commentText: this.content,
    user: {
      name: "Meenu Krishna",
      userId: this.authService.getUserId(),
      role: "front end Developer",
      avatarUrl: "assets/1.jpg"

           }
  }
 
  this.postService.addComment(comment, this.postid)
  this.content = '';
}

 ngOnInit(): void {}
  
 
}
  /*addUserComment()
  {
    this.newpost = { 
      postId: crypto.randomUUID(),
      user: {
        userId: this.authService.getUserId(),
        name: "Meenu Krishna",
        role: "Frontend developer",
        avatarUrl: "assets/1.jpg"
    },
    comments: [{
      commentText: this.valueHolder as string,
      
    user: {
        name:'Meenu Krishna',
        userId:this.authService.getUserId(),
        role: "Frontend developer",
        avatarUrl: "assets/1.jpg"
             }
    }]
  };
  console.log("Adding new post " + this.newpost.postId);
  this.postService.addPost(this.newpost);
  //this.postService.deletePost(this.newpost);
   }*/
   
  
            
