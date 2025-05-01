import { Component } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
   
   email='';
   password='';
   error='';

   constructor(private AuthserviceService: AuthserviceService,private router:Router){}

   login(){
    const success :boolean=this.AuthserviceService.login(this.email,this.password);
    if(success)
    {
      this.router.navigate(['/profile']);
    }else{
      this.error='Invalid credentials';
    }
   }


}
