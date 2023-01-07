import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';
import { PostModel } from 'src/app/model/post';
import { PostService } from 'src/app/posts/services/post.service';
import { Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PostDialogComponent } from '../post-dialog/post-dialog.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent implements OnInit {
  newpost?: PostModel;
  postService: PostService;
  videoUrl?: String = undefined;
  imageUrl?: string = undefined;
  content?: string='';
  safeSrc?: SafeResourceUrl;
  
 constructor(postService: PostService, private authService:AuthenticationService,
  public dialog:MatDialog, private sanitizer: DomSanitizer)
  { 
    this.postService = postService;    
  }

  ngOnInit(): void {
    if(this.videoUrl)
      this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl as string);
  }

  public onValueChange(event: Event): void {
    console.log(event.target);
    const value = (event.target as any).value;
    this.content = value;
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
    content: this.content as string,
    createdDate: new Date(),
    imageUrl: this.imageUrl,
    videoUrl: this.videoUrl as string
  };
  console.log("Adding new post " + this.newpost.postId);
  this.postService.addPost(this.newpost);
  //this.postService.deletePost(this.newpost);
  this.content = '';
  this.videoUrl = undefined;
  this.imageUrl = undefined;
  this.safeSrc = undefined;
   }
   openImageDialog() {
    var dialogRef = this.dialog.open(PostDialogComponent, {
      data: {
        title: 'Image Url',
        value: this.imageUrl??'https://cdn.pixabay.com/photo/2014/04/14/20/11/pink-324175_960_720.jpg'
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result == '') this.imageUrl = undefined; else this.imageUrl = result;
    });
  }

    openVideoDialog() {
      const dialogRef = this.dialog.open(PostDialogComponent, {
        data: {
          title: 'Video Url',
          value: this.videoUrl??'https://www.youtube.com/embed/c9F5kMUfFKk'
        },
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        if(result == '') { this.videoUrl = undefined; this.safeSrc = undefined; }else this.videoUrl = result;
        if(this.videoUrl)
      this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl as string);
      });
  }

}
