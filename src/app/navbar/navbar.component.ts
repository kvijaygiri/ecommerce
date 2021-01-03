import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
isUser:boolean=false
  constructor(private as:AuthenticationService) { }


  isOpen:boolean=false
  toggleNavBar(){
    this.isOpen=!this.isOpen;
  }

  ngOnInit(){
    this.as.user.subscribe(user=>{
      if(user){
        this.isUser=true;
        this.as.userId=user.uid
        
     } else{
       this.isUser=false;
       this.as.userId=''
      
     }
       });
  }
  logout(){
    this.as.logout();
  }

}
