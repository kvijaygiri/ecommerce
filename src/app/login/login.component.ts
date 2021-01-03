import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private as:AuthenticationService,private router:Router) { }

  ngOnInit(): void {
  }
login(form){
  this.as.login(form.value.email,form.value.password)
  .then((data)=>this.router.navigate(['/']))
  .catch(err=>console.log(err))
}
}
