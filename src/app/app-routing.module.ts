import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomeComponent } from './home/home.component';
import { HowComponent } from './how/how.component';
import { WhatsNextComponent } from './whats-next/whats-next.component';
//import { AppComponent } from './app.component';


const routes: Routes = [
  {path: 'about-me', component: AboutMeComponent},
  {path: 'whats-next', component: WhatsNextComponent},
  {path: 'home', component:HomeComponent},
  {path: 'how', component: HowComponent}
  //{path: 'app', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
