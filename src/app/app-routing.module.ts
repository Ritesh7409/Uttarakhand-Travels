import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { HillStationComponent } from './dashboard/hill-station/hill-station.component';
import { WildLifeComponent } from './dashboard/wild-life/wild-life.component';
import { TrekkingComponent } from './home/trekking/trekking.component';
import { PilgrimageComponent } from './dashboard/pilgrimage/pilgrimage.component';

const routes: Routes = [
  
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'blog',
    component:BlogComponent
  },
  {
    path:'home',
    component:DashboardComponent
  },
  {
    path:'home',
   // component:DashboardComponent
   children:[
     {
     path:'hill',
     component:HillStationComponent,
    //  children:[
    //    {
    //      path:'hill',
    //      component:HillStationComponent
    //    }
    //  ]
     },
      {
      path:'wild-station',
      component:WildLifeComponent,
   
      },
      {
        path:'Trekking',
      component:TrekkingComponent,
     }, 
     {
      path:'Pilgrimage',
    component:PilgrimageComponent,
   }
    
   ]
  },
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  // {
  //   path:'**':
  
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
