import { Component } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { Route, Router ,RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-register',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
    user={name:'',email:'',password:''};
    constructor(private AuthserviceService: AuthserviceService,private router:Router){}

    register(){
      this.AuthserviceService.register(this.user);
      this.router.navigate(['/login']);
    }
}
