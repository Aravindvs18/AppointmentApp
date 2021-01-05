import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { AppointmentDetail } from './appointment-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppointmentDetailService {
  constructor(private http: HttpClient) {}
  userid: string = localStorage.getItem('key') || '{}';

  formData: AppointmentDetail = new AppointmentDetail();
  list: AppointmentDetail[];
  readonly baseURL = 'http://localhost:55005/api/AppointmentDetail';

  postAppointmentDetails() {
    return this.http.post(this.baseURL, this.formData);
  }

  getAppointmentDetails() {
    this.http
      .get(`${this.baseURL}/${this.userid}`)
      .toPromise()
      .then((res) => (this.list = res as AppointmentDetail[]));
  }
  //
  putAppointmentDetails() {
    return this.http.put(
      `${this.baseURL}/${this.formData.appointmentId}`,
      this.formData
    );
  }

  deleteAppointmentDetails(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}
