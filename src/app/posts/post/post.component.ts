import { Component, Input, OnInit } from '@angular/core';
import { PostModel } from 'src/app/model/post';
import { PostService } from '../services/post.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post!:PostModel;
    
  safeSrc?: SafeResourceUrl;

   constructor(private postService:PostService, private sanitizer: DomSanitizer, private authService: AuthenticationService)
   {
   }

   deletePost()
   {
    console.log("Deleting post "+this.post.postId);
    this.postService.deletePost(this.post.postId);
   }

   showDeleteButton(){
    if(this.authService.getUserId() === this.post.user.userId)
      return true;
    else
      return false;
   }

  ngOnInit(): void {
    if(this.post.videoUrl)
      this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(this.post.videoUrl as string);
  }

}
