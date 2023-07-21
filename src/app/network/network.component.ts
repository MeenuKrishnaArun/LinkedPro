import { Component, OnInit } from '@angular/core';
import { NetworkusersdetailsService } from '../networkusersdetails.service';
import { networkUser } from '../model/networkUser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent {
  addButton:Boolean=true;
  eedituser?:networkUser;
  networkUsers:networkUser[]=[];
   constructor(private networkservice:NetworkusersdetailsService,private router:Router)
    { 

       this.networkUsers=this.networkservice.networkUsers;
   }
  
   createUser()
   {
    this.addButton=false;
   }
   formVanish()
    {
     if(this.addButton===false)
     {
      this.addButton=true;
     }
     else
     {
      this.addButton=true;

     }
   }
   DeleteUser(phone:number)
   {
    this.networkservice.DeleteUser(phone);
    }
    edituser(phone:number)
    {  
     let eedituser = this.networkservice.Edituser(phone);
     this.networkservice.SendingEditUser(this.eedituser);
    //  this.router.navigateByUrl('/header/popupform');
       
    }
}
