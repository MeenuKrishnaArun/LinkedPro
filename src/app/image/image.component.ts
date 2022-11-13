import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  logout()
  {
    this.authenticationService.logout();
  }
  constructor(public authenticationService:AuthenticationService)
{}

  ngOnInit(): void {
  }

}
