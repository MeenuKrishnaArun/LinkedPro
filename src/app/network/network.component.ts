import { Component, OnInit ,ViewChild,AfterViewInit} from '@angular/core';
import { NetworkusersdetailsService } from '../networkusersdetails.service';
import { networkUser } from '../model/networkUser';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { NativeDateModule } from '@angular/material/core';


@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit,AfterViewInit {
  
@ViewChild(MatPaginator) paginator!:MatPaginator;

  displayedColumns: string[] = ['USERNAME', 'PHONE', 'Email','Gender','EDIT'];
  dataSource= new MatTableDataSource(this.networkservice.networkUsers);
  networkUsers:networkUser[]=[];


   constructor(private networkservice:NetworkusersdetailsService,private router:Router)
    { 
     this.networkUsers=this.networkservice.networkUsers;
       this.networkservice.tableListUpdatedEvent.subscribe((res)=>{this.refreshtableList();})
       this.refreshtableList();
     
    }

    
    ngOnInit(): void 
    {
      this.refreshtableList();
    }
    
    ngAfterViewInit(): void 
    {
        this.dataSource = new MatTableDataSource(this.networkUsers);
        this.dataSource.paginator=this.paginator;

      //  this.length=this.networkservice.getlist.length;
     

       this.dataSource.paginator = this.paginator;

    }
   refreshtableList()
   {
     this.networkUsers = this.networkservice.getlist();
   }
   DeleteUser(phone:number)
   {

    this.networkservice.DeleteUser(phone);

    
    }
    NagivateToEdit(phone:number)
    {  

       let user=this.networkservice.getuser(phone);
      //this.networkservice.DeleteUser(phone);
       console.log(user);   
      
      this.router.navigateByUrl('/header/popupform', { state: user });
      
    }

    
  
  }
