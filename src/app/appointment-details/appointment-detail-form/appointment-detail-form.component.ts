import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppointmentDetail } from 'src/app/shared/appointment-detail.model';
import { AppointmentDetailService } from 'src/app/shared/appointment-detail.service';

interface DoctorList {
  name: string;
  viewName: string;
}
interface Gender {
  gender: string;
  view: string;
}

@Component({
  selector: 'app-appointment-detail-form',
  templateUrl: './appointment-detail-form.component.html',
  styles: [],
})
export class AppointmentDetailFormComponent implements OnInit {
  form: any;
  userid: string = localStorage.getItem('key') || '{}';

  doctorlists: DoctorList[] = [
    { name: 'Doctor-1', viewName: 'DOCTOR 1' },
    { name: 'Doctor-2', viewName: 'DOCTOR 2' },
    { name: 'Doctor-3', viewName: 'DOCTOR 3' },
  ];
  genderlists: Gender[] = [
    { gender: 'Male', view: 'Male' },
    { gender: 'Female', view: 'Female' },
    { gender: 'Others', view: 'Others' },
  ];

  constructor(
    public service: AppointmentDetailService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.service.formData.userId = this.userid;
    if (this.service.formData.appointmentId == 0) this.insertRecord(form);
    else this.updateRecord(form);
  }
  insertRecord(form: NgForm) {
    this.service.postAppointmentDetails().subscribe(
      (res) => {
        this.resetForm(form);
        this.service.getAppointmentDetails();
        this.toastr.success(
          'Booked Successfully',
          'Appointment Detail Register',
          {
            closeButton: true,
            disableTimeOut: true,
            positionClass: 'toast-center-center',
          }
        );
        this.router.navigate(['app-appointment-details']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  updateRecord(form: NgForm) {
    this.service.putAppointmentDetails().subscribe(
      (res) => {
        this.resetForm(form);
        this.service.getAppointmentDetails();
        this.toastr.info(
          'Booking Updated Successfully',
          'Appointment Detail Register',
          {
            closeButton: true,
            disableTimeOut: true,
            positionClass: 'toast-center-center',
          }
        );
      },
      (err) => {
        console.log(err);
      }
    );
    this.router.navigate(['app-appointment-details']);
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new AppointmentDetail();
  }
}
