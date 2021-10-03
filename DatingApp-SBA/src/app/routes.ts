import { AuthGuard } from './_guards/auth.guard';
import { MatchesComponent } from './matches/matches.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

export const AppRoutes:Routes = [
        {path:'' , component:HomeComponent},
        {
                path:'',
                runGuardsAndResolvers:'always',
                canActivate:[AuthGuard],
                children :[
                        {path:'matches' , component:MatchesComponent},
                        {path:'messages' , component:MessagesComponent},
                        {path:'lists' , component:ListsComponent}
                ]
        },
        {path:'**' , redirectTo:'' , pathMatch:'full'},
];