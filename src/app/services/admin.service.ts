import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  headers1: HttpHeaders;
  id: string;
  baseUrl = environment.baseUrl;

  constructor(
    private http:HttpClient) {
    this.id = localStorage.getItem('lsaUserId');
    this.headers1= new HttpHeaders({'Authorization': "Bearer "+localStorage.getItem('lsaToken_access')});
  }

  // Applicants

  indexApplicants(){
    return this.http.get(this.baseUrl + '/adminapplicants', { headers: this.headers1 });
  }

  updateApplyInfo(userId, info){
    return this.http.put(this.baseUrl + '/adminapplicants/' + userId , info, { headers: this.headers1 });
  }

  storeNewTutor(e){
    return this.http.post(this.baseUrl + '/newtutor', e, {headers:this.headers1});
  }


  // Tutors
  indexTutors(){
    return this.http.get(this.baseUrl + '/admintutors', { headers: this.headers1 });
  }

  updateTutors(tutorId, info){
    return this.http.put(this.baseUrl + '/admintutors/' + tutorId, info, { headers: this.headers1 });
  }
}