import { Component,ViewChild,OnInit,AfterViewInit } from '@angular/core';
import { FormControl,NgForm,Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { networkUser } from '../model/networkUser';
import { NetworkusersdetailsService } from '../networkusersdetails.service';
import { Router } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-popupform',
  templateUrl: './popupform.component.html',
  styleUrls: ['./popupform.component.css']
  
})
export class PopupformComponent implements  AfterViewInit {
  userArray!:networkUser;
  name:string='';
  phone:number=0;
  emailid:string='';
  gen:string='';
  user?:networkUser;
  gender=[{id:'1',value:'male'},
  {id:'2',value:'female'}]
   @ViewChild('myForm') form!:NgForm;

 
  constructor(private networkservice:NetworkusersdetailsService ,private router:Router)
  {
    this.user = this.router.getCurrentNavigation()?.extras.state as networkUser|undefined
  }

ngAfterViewInit(): void { 

  if(this.user)
  
    setTimeout(()=>{this.form.setValue({ name:this.user?.userName,
                         phone:this.user?.phoneNum,
                         email:this.user?.mailId,
                         gender:this.user?.gender
                        })}, 500);
                      
}
  
  onSubmit()
  {
 this.name=this.form.value.name;
 this.phone=this.form.value.phone;
 this.emailid=this.form.value.email;
 this.gen=this.form.value.gender;
 this.userArray={
                  
                 userName:this.name,
                 phoneNum:this.phone,
                 mailId:this.emailid,
                gender:this.gen}
 this.networkservice.AddUser(this.userArray);
 this.router.navigateByUrl('/header/network');
 

 }
}
  

  
