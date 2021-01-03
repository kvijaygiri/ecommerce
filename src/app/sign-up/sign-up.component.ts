import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
errorMsg:string='';
sucessMsg:string='';
  
  constructor(private as:AuthenticationService,
    private user:UserService,private router:Router) { }

  ngOnInit(): void {
  }
  dataCapture(form){
    
 this.as
 .signUp(form.value.semail,form.value.spass)
 .then((data)=>{
  this.sucessMsg='SuccessFully SignIn.';
  this.user.addNewUser(data.user.uid, form.value.semail,form.value.spass);
  this.router.navigate(['/']);
 })
 .catch((err)=>(this.errorMsg=err));
  }
  
}
