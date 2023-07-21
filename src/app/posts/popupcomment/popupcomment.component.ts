import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA,MatDialog } from '@angular/material/dialog';
import { DialogData } from '../post-dialog/post-dialog.component';

@Component({
  selector: 'app-popupcomment',
  templateUrl: './popupcomment.component.html',
  styleUrls: ['./popupcomment.component.css']
})
export class PopupcommentComponent implements OnInit {
  comments:any;
  
  
  constructor(@Inject(MAT_DIALOG_DATA) public data:DialogData,public dialogref:MatDialogRef<PopupcommentComponent>) 
  { 
    this.comments = data;
  }

  ngOnInit(): void {
  }
 onNoClick():void {

  this.dialogref.close();
 }
}
