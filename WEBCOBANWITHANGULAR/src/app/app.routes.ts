import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { ChitietComponent } from '../chitiet/chitiet.component';
import { AdminComponent } from '../admin/admin.component';
import { AuthorComponent } from '../author/author.component';


export const routes: Routes = [
    // { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'chitiet/:id', component: ChitietComponent},
    {path: 'admin', component: AdminComponent},
    {path: 'author', component: AuthorComponent},
];

