import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


export const routes: Routes = [

    {path:'', component:RegisterComponent},
    {path:'login',component:LoginComponent},
    {path:'profile',component:ProfileComponent},
];

@NgModule({
    imports:[RouterModule.forRoot(routes),BrowserModule,FormsModule],
    exports:[RouterModule]
})

export class AppRoutingModule{}