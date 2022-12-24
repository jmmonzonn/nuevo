
import firebase from 'firebase/compat/app';
import "firebase/compat/auth"
import {auth} from './firebase'
import backend from './backend.json'
import { getAuth, signOut } from "firebase/auth";
  
export const login = async({email, password})=>{
    const res = await firebase.auth()
      .signInWithEmailAndPassword(email, password);
      if (res.user) {
        for (let user of backend.users) {
          console.log(res.user.multiFactor.user.uid)
          console.log(user.uid)
          if (user.uid === res.user.multiFactor.user.uid) {
            return user
          }
        }
      }
}
export const checkLogin = () => {
    let auth = getAuth().currentUser
    if (auth) {
      for (let user of backend.users) {
        if (user.uid === auth.uid) {
          return user
        }
      }
    }
  } 

export const logout = () => {
  let auth = getAuth()
  if (signOut(auth)) {
    return 200
  }
  
  
}