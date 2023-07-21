import { Component,ViewChild } from '@angular/core';
import { FormControl,NgForm,Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { networkUser } from '../model/networkUser';
import { NetworkusersdetailsService } from '../networkusersdetails.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-popupform',
  templateUrl: './popupform.component.html',
  styleUrls: ['./popupform.component.css']
  
})
export class PopupformComponent {
  userArray!:networkUser;
  name:string='';
  phone:number=0;
  emailid:string='';
  gen:string='';
  edituserON:boolean=true;
  @ViewChild('myForm')form!: NgForm;
  constructor(private networkservice:NetworkusersdetailsService ,private router:Router)
  {
    this.networkservice.form_gettingEditUser().subscribe((data)=>{
      this.form.setValue({ userName:data.userName,
                           phoneNum:data.phoneNum,
                           mailId:data.mailId,
                           gender:data.gender
                          })
      })
  }
 

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
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
  

  
