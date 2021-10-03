import { AuthGuard } from './_guards/auth.guard';
import { AppRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AlertifyService } from './_services/Alertify.service';
import { MatchesComponent } from './matches/matches.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';


@NgModule({
  declarations: [							
    AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      MatchesComponent,
      ListsComponent,
      MessagesComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [AlertifyService , AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
