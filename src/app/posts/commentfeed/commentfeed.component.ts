import { Component, Input, OnInit, Output } from '@angular/core';
import { Comment, PostModel } from 'src/app/model/post';
import { PostService } from 'src/app/posts/services/post.service';



@Component({
  selector: 'app-commentfeed',
  templateUrl: './commentfeed.component.html',
  styleUrls: ['./commentfeed.component.css']
})
export class CommentfeedComponent implements OnInit {
 
  @Input() comments?:Comment[];
  buttonvisible:boolean=true;
  
   constructor()
   { 
    

   }
  
   
   ngOnInit(): void {
  
    
  }
   
}



