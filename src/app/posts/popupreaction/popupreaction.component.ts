import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PostModel } from 'src/app/model/post';
import { DialogData } from '../post-dialog/post-dialog.component';


@Component({
  selector: 'app-popupreaction',
  templateUrl: './popupreaction.component.html',
  styleUrls: ['./popupreaction.component.css']
})
export class PopupreactionComponent implements OnInit {
   likes:any;
  constructor(@Inject(MAT_DIALOG_DATA)
   public data:DialogData,
   //public data:MatDialog,
  public dialogRef: MatDialogRef<PopupreactionComponent>) 
  {
    this.likes = data;

  }

  ngOnInit(): void {
  }
 
  onNoClick(): void 
  {
    this.dialogRef.close();
  }
}
