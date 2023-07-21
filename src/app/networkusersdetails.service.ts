import { Injectable,EventEmitter } from '@angular/core';
import { networkUser } from './model/networkUser';
import { Observable, Subject,Subscriber, timer } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class NetworkusersdetailsService {
  networkUsers:networkUser[]=[];
  user?:networkUser;
  private subject = new Subject<networkUser>();
  constructor() { 


    
this.networkUsers=[
  { userName:'meenu', phoneNum:470,mailId:'meenukrishna@gmail.com',gender:'female'},
  {userName:'ponni', phoneNum:471,mailId:'grace123@gmail.com',gender:'female'},
  {userName:'karthik', phoneNum:472,mailId:'karthik@gmail.com',gender:'female'},
  {userName:'arjun', phoneNum:473,mailId:'arjun@gmail.com',gender:'male'},
  {userName:'john', phoneNum:474,mailId:'johny@gmail.com',gender:'male'}
  ];
}

  AddUser(item:networkUser)
  {
    this.networkUsers.push(item);
  }
  DeleteUser(phone:number)
  {
    
  let user= this.networkUsers.findIndex(item => item.phoneNum==phone);
this.networkUsers.splice(user,1);
}

 
Edituser(phone:number)
{
  this.user= this.networkUsers.find(item=>{return item.phoneNum==phone});

}



SendingEditUser(data:any)
{
  this.subject.next(data);
}
form_gettingEditUser():Observable<networkUser>
{
 return this.subject.asObservable();
}
}
