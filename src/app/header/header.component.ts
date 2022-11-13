import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  logout()
  {
    this.authenticationService.logout();
  }

  constructor(public authenticationService:AuthenticationService)
  

   { }

  ngOnInit(): void {
  }
  
}
