import { Component, Input, OnInit } from '@angular/core';
import { PostModel } from '../model/post';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  valueinside:string='';
  

  

  constructor() { }

  public valueTranslator(event:Event)
  {
    console.log(event.target);
    this.valueinside=(event.target as any).value

  }
  
  ngOnInit(): void {
  }

}
