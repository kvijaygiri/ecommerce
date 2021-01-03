import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private as:AngularFirestore) { }
  addNewUser(id,name,password){
    return this.as.doc('user/'+id).set({
      name,
      password,
    });
  }
}
