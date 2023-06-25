import { Component, OnInit,Input, ɵallowSanitizationBypassAndThrow, OnChanges } from '@angular/core';
import { Comment, PostModel } from 'src/app/model/post';
import { PostService } from '../services/post.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PopupreactionComponent } from '../popupreaction/popupreaction.component';
import { PopupcommentComponent } from '../popupcomment/popupcomment.component';
import { CommentfeedComponent } from '../commentfeed/commentfeed.component';


@Component({
  selector: 'app-postsummary',
  templateUrl: './postsummary.component.html',
  styleUrls: ['./postsummary.component.css']
})
export class PostsummaryComponent implements OnChanges {
  isButtonVisible:boolean =false;
  flag:boolean=false;
  @Input() post!:PostModel;

  get likeSummary(){
  if(this.post?.Likes?.length==0)
    return ''
  else if(this.post?.Likes?.length==1)
    return this.post?.Likes?.length + ' Like'
  else
    return this.post?.Likes?.length + ' Likes'
  }

  get commentSummary(){
    if(this.post?.comments?.length==0)
    return ''
  else if(this.post?.comments?.length==1)
    return this.post?.comments?.length + ' Comment'
  else
    return this.post?.comments?.length + ' Comments'
  };

  constructor( public dialog:MatDialog,private postservices:PostService)
  {
    
    
  }
  CommentclicK()
  {
          // this.postservices.eventraised(this.isButtonVisible);
           if(this.isButtonVisible == false)
              this.isButtonVisible=true;
          else 
              this.isButtonVisible = false;
         this.postservices.eventraised(this.isButtonVisible);

              
  }


  
  OpenReactionDialogue()
  {
    let dialogue1 = this.dialog.open(PopupreactionComponent,{
       data:this.post?.Likes
            })
    
    dialogue1.afterClosed().subscribe((val)=>{console.log(val);});
      
  }

  /*OpenCommentReaction()
  {
    let dialogue2 = this.dialog.open(PopupcommentComponent,{
      data:this.post?.comments
    })
    dialogue2.afterClosed().subscribe((valu)=>{console.log(valu);});


  }*/
  
  ngOnChanges(): void{


    }
}
