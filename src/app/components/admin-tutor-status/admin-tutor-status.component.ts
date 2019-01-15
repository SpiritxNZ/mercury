import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-admin-tutor-status',
  templateUrl: './admin-tutor-status.component.html',
  styleUrls: ['./admin-tutor-status.component.css']
})
export class AdminTutorStatusComponent implements OnInit {
  tutors: any;

  constructor(
    private adminService: AdminService,
    public sanitizer: DomSanitizer
  ) {
  }

  ngOnInit() {
    this.adminService.indexTutors().subscribe(
      (res) => {
        console.log(res), this.tutors = res['dataSecret'].tutors;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  findTutor(tutors: [any], user_id: number) {
    for (const tutor of tutors) {
      if (tutor.user_id === user_id) {
        return tutor;
      }
    }
  }
  noPub(event) {
    const tutorID = Number(event.srcElement.id.slice(3));
    // const tutor = this.findTutor(this.tutors, tutorID);
    const data = {
      publish: 0
    };

    this.adminService.updateTutors(tutorID, data).subscribe((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });
  }
  toPub(event) {
    const tutorID = Number(event.srcElement.id.slice(3));
    // const tutor = this.findTutor(this.tutors, tutorID);
    const data = {
      publish: 2
    };

    this.adminService.updateTutors(tutorID, data).subscribe((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });
  }
  onSubmit(event) {
  }
}


