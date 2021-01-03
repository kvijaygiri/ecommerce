import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NameValidation } from 'src/app/CustomValidation';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
checkout=new FormGroup({
  Name:new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern('[A-Za-z]{8}'),
  NameValidation(),
]),
  City:new FormControl('',[Validators.required,Validators.minLength(2)]),
  State:new FormControl('',[Validators.required,Validators.minLength(2)]),
  Gender:new FormControl('',[Validators.minLength(2)]),
  PhNumber:new FormControl('',[Validators.required,Validators.minLength(10),
    Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]),
  Address:new FormControl('',[Validators.required,Validators.minLength(25)]),
  Pincode:new FormControl('',[Validators.required,Validators.minLength(6),
  Validators.pattern('[0-9]{6}$')]),
});
}
