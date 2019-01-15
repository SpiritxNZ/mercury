import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import {ElementRef} from '@angular/core';

@Component({
  selector: 'app-admin-tutor-applicant',
  templateUrl: './admin-tutor-applicant.component.html',
  styleUrls: ['./admin-tutor-applicant.component.css']
})
export class AdminTutorApplicantComponent implements OnInit {
  applicants: any;
  time1 = '';
  place1 = '';
  time2 = '';
  place2 = '';
  time3 = '';
  place3 = '';

  constructor(
    private adminService: AdminService,
    private elRef: ElementRef
  ) { }

  ngOnInit() {
    this.adminService.indexApplicants().subscribe(
      (res) => { console.log(res),  this.applicants = res['dataSecret'].applicants; },
      (err) => console.log(err)
    );
  }


  onSubmit(event) {
    let data = [];
    let userID = Number(event.srcElement.id.slice(3));
    if (this.time1 !== '' || this.place1 !== '') {
      let interview = this.addInterview(this.time1, this.place1);
      data.push(interview);
    }
    if (this.time2 !== '' || this.place2 !== '') {
      let interview = this.addInterview(this.time2, this.place2);
      data.push(interview);
    }
    if (this.time3 !== '' || this.place3 !== '') {
      let interview = this.addInterview(this.time3, this.place3);
      data.push(interview);
    }
    console.log(data, userID);
    let myData = {
      interview: data
    }
    this.adminService.updateApplyInfo(userID, myData).subscribe((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });
  }

  addInterview(time, place) {
    let interview = {
      dateTime: time,
      location: place
    };
    return interview;
  }
  // find a applicant using user id
  findApplicant(applicants: any[], user_id: number) {
    for (let applicant of applicants) {
      if (applicant.user_id === user_id) {
        return applicant;
      }
    }
  }
  addNewTutor(event) {
    let userID = Number(event.srcElement.id.slice(3));
    let applicant = this.findApplicant(this.applicants, userID);
    let data = {
      user_id: userID,
      first_name: applicant.first_name,
      location: applicant.location,
      discipline: applicant.discipline,
      curriculum: applicant.curriculum,
      price_1: 0
    };
    this.adminService.storeNewTutor(data).subscribe((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });
  }
  process(event) {
    let userID = Number(event.srcElement.id.slice(3));
    let action = event.srcElement.id.slice(0, 3);
    console.log(userID);
    let data = '';
    if (action === 'app') {
      data = 'approved';
    }
    if (action === 'dec') {
      data = 'declined';
    }
    let myData = {
      condition: data
    };
    console.log(data);
    this.adminService.updateApplyInfo(userID, myData).subscribe((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });
  }
}