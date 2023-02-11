import { Component,Input, OnInit } from '@angular/core';
import { Comment, PostModel, ReactionSummary } from 'src/app/model/post';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  

  @Input() comment!: Comment;
  
  constructor()
   { }

   ngOnInit(): void {
  }
}


  

