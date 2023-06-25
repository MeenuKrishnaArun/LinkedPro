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
   isButtonVisible = false;
   hidecomment:boolean=true;;
   postLiked=true;
  @Input() post!:PostModel;
  @Input() postId!:string;
  
 safeSrc?: SafeResourceUrl;
  
 constructor(private postService:PostService, private sanitizer: DomSanitizer, private authService: AuthenticationService )
   {
    this.postService.HideShowCommentEmitter.subscribe((value)=>{
      this.isButtonVisible = value;})
   }
    show()
    {
      if(this.isButtonVisible == false)
        this.isButtonVisible=true;
        
        
      else 
      this.isButtonVisible = false
         
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

   addLike()
   {
    if(this.postLiked == true){
      let LikedUser= {
        
            name: "Meenu Krishna",
            userId: this.authService.getUserId(),
            role: "front end Developer",
            avatarUrl: "assets/1.jpg"

              }
        
      this.postService.addLikes(LikedUser,this.postId)
      this.postLiked=false;   
    }   
    else {
      let UnlikedUser= {
        
            name: "Meenu Krishna",
            userId: this.authService.getUserId(),
            role: "front end Developer",
            avatarUrl: "assets/1.jpg"

              }
        
      this.postService.DeleteLikes(this.postId,UnlikedUser.userId)
      this.postLiked = true; 
           
    }  
     
   }
    ngOnInit(): void {
    if(this.post.videoUrl)
      this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(this.post.videoUrl as string);
  }
  
 
   
  
}
