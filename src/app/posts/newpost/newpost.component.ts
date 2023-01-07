import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';
import { PostModel } from 'src/app/model/post';
import { PostService } from 'src/app/posts/services/post.service';
@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent implements OnInit {
  newpost?: PostModel;
  postService: PostService;

 constructor(postService: PostService, private authService:AuthenticationService)
  { 
    this.postService = postService;
  }


  ngOnInit(): void {
  }

  aaddPost()
  {
    this.newpost = { 
      postId: crypto.randomUUID(),
      user: {
        userId: this.authService.getUserId(),
        name: "Meenu Krishna",
        role: "Frontend developer",
        avatarUrl: "assets/1.jpg"
    },
    content: `I am Meenukrishna from kollam,i have completed btech from TEC oyoor and passed out on 2013. 

     So this year, I wanted to share a new version with all the best spots to experience autumn in Sweden in 2020. We’ve been spending a ton of time outside in nature. And I can’t wait to share my favourite spots and memories with you in a little photo diary..`,
    createdDate: new Date(),
    imageUrl: "https://cdn.pixabay.com/photo/2014/04/14/20/11/pink-324175_960_720.jpg",
    videoUrl: undefined
  };
  console.log("Adding new post " + this.newpost.postId);
  this.postService.addPost(this.newpost);
  //this.postService.deletePost(this.newpost);
  
 
  }
 

}
  

