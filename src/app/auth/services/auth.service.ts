import { Injectable } from '@angular/core';
import  firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable()
export class AuthService {

  public user:firebase.User;

  constructor(public afAuth: AngularFireAuth) { }

  async login(email: string, password: string){
    try{
      const result = await this.afAuth.signInWithEmailAndPassword(
        email, 
        password
      );
      return result;
    } catch(error){
      console.log(error);
    }
  
  }

  async register(email: string, password: string){
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(
        email, 
        password
      );
      return result;  
    } catch (error) {
      console.log(error);
    }
    
  }

  async logout(){
    try {
      await this.afAuth.signOut();  
    } catch (error) {
      console.log(error);
    }
    
  }
}


