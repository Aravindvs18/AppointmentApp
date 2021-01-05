import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppointmentDetail } from '../shared/appointment-detail.model';
import { AppointmentDetailService } from '../shared/appointment-detail.service';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styles: [],
})
export class AppointmentDetailsComponent implements OnInit {
  constructor(
    public service: AppointmentDetailService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.service.getAppointmentDetails();
  }

  populateForm(selectedRecord: AppointmentDetail) {
    this.service.formData = Object.assign({}, selectedRecord);
    this.router.navigate(['app-appointment-detail-form']);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record')) {
      this.service.deleteAppointmentDetails(id).subscribe(
        (res) => {
          this.service.getAppointmentDetails();
          this.toastr.error;
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
