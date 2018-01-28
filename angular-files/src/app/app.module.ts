import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import {FormsModule} from "@angular/forms";  
import { ScrollToModule } from 'ng2-scroll-to-el';

import { ChartsModule } from 'ng2-charts/ng2-charts';


import { HomeComponent } from './component/home/home.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { IndexComponent } from './component/index/index.component';
import { ProjectsComponent } from './component/projects/projects.component';
import {PubSubService} from './service/pub-sub/pub-sub.service';
import { ProjectCudeComponent } from './component/index/project-cude/project-cude.component';
import { ChartComponent } from './component/index/chart/chart.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: IndexComponent },
  { path: 'Projects', component: ProjectsComponent }
];


@NgModule({
  declarations: [
    HomeComponent,
    NavBarComponent,
    IndexComponent,
    ProjectsComponent,
    ProjectCudeComponent,
    ChartComponent,
    
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ScrollToModule,
    ChartsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PubSubService],
  bootstrap: [HomeComponent]
})
export class AppModule { }
