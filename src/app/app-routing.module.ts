import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ImageComponent } from './image/image.component';
import { LoginComponent } from './login/login.component';
import { MessageComponent } from './message/message.component';
import { NetworkComponent } from './network/network.component';
import { NotificationComponent } from './notification/notification.component';
import { PopupformComponent } from './popupform/popupform.component';
import { ErrorComponent } from './error/error.component';
import { AuthenticationGuard } from './authguard'
const routes: Routes = [
      {
        path:'app',component:HeaderComponent,
        children:[{path:'home',component:HomeComponent, canActivate: [AuthenticationGuard]},
                   {path:'network',component:NetworkComponent, canActivate: [AuthenticationGuard]},
                    {path:'message',component:MessageComponent, canActivate: [AuthenticationGuard]},
                      {path:'image',component:ImageComponent, canActivate: [AuthenticationGuard]},
                    {path:'notification',component:NotificationComponent, canActivate: [AuthenticationGuard]},
                    {
                      path:'popupform',component:PopupformComponent
                    } ]
      },
       {
        path:'login',component:LoginComponent
      },
      { path: '', redirectTo: '/app/home', pathMatch: 'full' },

      ];
        
        
        
        
        
        
        
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
