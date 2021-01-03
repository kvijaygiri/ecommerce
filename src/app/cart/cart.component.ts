import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  Shoppingcart:Array<any>
  startIndex=0;
  endIndex=5;

  constructor(private cart:CartService) { }

  ngOnInit(){
    this.cart.getCart().subscribe((cs) => {
this.Shoppingcart =cs.map((x) =>{
return{
  id:x.payload.doc.id,
  ...(x.payload.doc.data() as {}),
};



});

console.log(this.Shoppingcart);


    });
  }
  deleteCart(index){
   
    this.cart.deleteproductfromCart(this.Shoppingcart[index].id);
  }
  updateCart(index){
   
    this.cart.updateproductfromCart(
      this.Shoppingcart[index].id,
      this.Shoppingcart[index].amount
      );
  }
  callArray(length){
    return new Array(length % 9);
  }
  updateIndex(pageIndex){
    this.startIndex = pageIndex * 5;
    this.endIndex = this.startIndex + 5;

  }
  get totalPrice(){
    return this.Shoppingcart.reduce((p,c)=>{
    //[100,200,300,400,500]
    //[1000+500=1500]
       return p + c.price; 
    },0);
  }
}
