import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  a = new Date();
  currentTime = this.a.getTime();
  xtExpire: string;
  baseUrl = environment.baseUrl;
  
  constructor(
    private http:HttpClient,
    private router:Router
  ) { }

  login(loginUser){
    return  new Promise((resolve, reject) => {
      this.http.post(this.baseUrl+'/login', loginUser).toPromise().then(
        (userData)=>{resolve(userData), this.setTokens(userData)},
        (err) => reject(err));
    });
  }

  setTokens(user){
    if(user['dataCon'].xUr !== 9){
      return alert('User is not an admin');
    }
    this.xtExpire =  String(this.currentTime + 43200000)

    localStorage.setItem('lsaToken_access', user.dataCon.xT.access_token);
    localStorage.setItem('lsaToken_expires', this.xtExpire);
    localStorage.setItem('lsaUserId', user.dataCon.xUi);
    localStorage.setItem('lsaUserName', user.dataCon.userBasic.first_name);
    localStorage.setItem('lsaWho', user.dataCon.xUr);
  }

  getAuth(){
    let token = localStorage.getItem('lsaToken_access')
    let userRole = localStorage.getItem('lsaWho')
    
    if(token){
      var eT = Number(localStorage.getItem('lsaToken_expires'))
      console.log('now:'+this.currentTime)
      console.log('exp:'+eT)
     if((eT > this.currentTime) && (userRole=='9')){
       return true
     }
     else{
      return false
     }
    }
    else{
      return false
    }
  }


  loggingOut(){
    localStorage.clear();
    this.router.navigate(['index']);
  }
}