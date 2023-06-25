import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ImageComponent } from './image/image.component';
import { LoginComponent } from './login/login.component';
import { MessageComponent } from './message/message.component';
import { NetworkComponent } from './network/network.component';
import { NotificationComponent } from './notification/notification.component';
const routes: Routes = [
      {
        path:'header',component:HeaderComponent,
        children:[{path:'home',component:HomeComponent},
                   {path:'network',component:NetworkComponent},
                    {path:'message',component:MessageComponent},
                      {path:'image',component:ImageComponent},
                    {path:'notification',component:NotificationComponent} ]
      },
       {
        path:'',component:LoginComponent
      }

      ];
        
        
        
        
        
        
        
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
