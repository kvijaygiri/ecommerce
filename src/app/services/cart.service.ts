import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private fs:AngularFirestore,private as:AuthenticationService) { }

  addToCart(Product){
return this.fs.collection(`user/${this.as.userId}/cart`).add(Product);
  }
  getCart(){
    return this.fs.collection(`user/${this.as.userId}/cart`).snapshotChanges();
      }
      deleteproductfromCart(id)
      {
        return this.fs.doc(`user/${this.as.userId}/cart/${id}`).delete()
      }
      updateproductfromCart(id,amount)
      {
        return this.fs.doc(`user/${this.as.userId}/cart/${id}`).update({amount});
      }
      
}
