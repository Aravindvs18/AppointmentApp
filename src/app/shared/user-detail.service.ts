import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserDetail } from './user-detail.model';
import { HttpClient } from '@angular/common/http';
import { IUser } from './Iuser';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserDetailService {
  constructor(private http: HttpClient, private router: Router) {}

  formData: UserDetail = new UserDetail();
  list: UserDetail[];
  isLogedIn: boolean;
  currentUser: IUser = {
    username: '',
    email: '',
    uniqueid: '',
  };
  get isAuthenticated() {
    return !!localStorage.getItem('key');
  }

  login(UserDetail: any): Observable<IUser> {
    return this.http
      .post('http://localhost:55005/api/Identity/login', UserDetail)
      .pipe(
        map((response: any) => {
          this.isLogedIn = response.result.succeeded;
          this.currentUser.username = response.username;
          this.currentUser.email = response.email;
          this.currentUser.uniqueid = response.uniqueid;
          localStorage.setItem('key', this.currentUser.uniqueid);
          return this.currentUser;
        })
      );
  }

  logout() {
    this.isLogedIn = false;
    localStorage.removeItem('key');
    this.router.navigate(['app-login-details']);
  }

  signup() {
    return this.http.post(
      'http://localhost:55005/api/Identity/signup',
      this.formData
    );
  }
}
