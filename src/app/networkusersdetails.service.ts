import { Injectable, ViewChild } from '@angular/core';
import { networkUser } from './model/networkUser';
import { Observable, Subject,Subscriber, timer } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';


@Injectable({
  providedIn: 'root'
})
export class NetworkusersdetailsService {

  public tableListUpdatedEvent: Observable<boolean>;
  private tableSubject: Subject<boolean>;
  
  networkUsers:networkUser[]=[];

  constructor() { 

    this.tableSubject = new Subject<boolean>();
   this.tableListUpdatedEvent = this.tableSubject as Observable<boolean>;

this.networkUsers=[
  { userName:'geethu', phoneNum:470,mailId:'meenu@gmail.com',gender:'female'},
  {userName:'hridhya', phoneNum:471,mailId:'silparace123@gmail.com',gender:'female'},
  {userName:'karthik', phoneNum:472,mailId:'karthik@gmail.com',gender:'female'},
  {userName:'arun', phoneNum:473,mailId:'arjun@gmail.com',gender:'male'},
  {userName:'johny', phoneNum:474,mailId:'johny@gmail.com',gender:'male'},
  { userName:'sara', phoneNum:475,mailId:'sara@gmail.com',gender:'female'},
  {userName:'jeena', phoneNum:476,mailId:'jeena123@gmail.com',gender:'female'},
  {userName:'sreeja', phoneNum:477,mailId:'se@gmail.com',gender:'female'},
  {userName:'molly', phoneNum:478,mailId:'arj@gmail.com',gender:'male'},
  { userName:'meenu', phoneNum:479,mailId:'meenukrishna@gmail.com',gender:'female'},
  {userName:'lekshmi', phoneNum:481,mailId:'grace123@gmail.com',gender:'female'},
  {userName:'suma', phoneNum:482,mailId:'suma@gmail.com',gender:'female'},
  {userName:'pavithra', phoneNum:483,mailId:'pavi@gmail.com',gender:'male'},
  { userName:'leenu', phoneNum:484,mailId:'liya@gmail.com',gender:'female'},
  {userName:'liju', phoneNum:485,mailId:'katherine@gmail.com',gender:'female'},
  {userName:'baiju', phoneNum:486,mailId:'saju@gmail.com',gender:'female'},
  {userName:'serena', phoneNum:487,mailId:'zimla@gmail.com',gender:'male'},
  ];
  
  
}
totalNumberofUsers()
  {
   return this.networkUsers.length;
  
  }
getlist(): networkUser[]
{
  return this.networkUsers;
}
  AddUser(item:networkUser)
  {
    this.networkUsers.unshift(item);
  }
  DeleteUser(phone:number)
  {
    
  //let user= this.networkUsers.findIndex(item => item.phoneNum==phone);
this.networkUsers=this.networkUsers.filter(item=>item.phoneNum!==phone);
  //this.networkUsers.splice(user,1);
  this.tableSubject.next(true);

}

 
getuser(phone:number)
{
  let Currentuser= this.networkUsers.find( item => item.phoneNum==phone);
  return Currentuser;
}



}


