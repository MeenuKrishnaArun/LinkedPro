import { Component, Input, OnInit } from '@angular/core';
import { PostModel } from 'src/app/model/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post!:PostModel;
  constructor() { }

  ngOnInit(): void {
  }

}
