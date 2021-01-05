import { Component } from '@angular/core';
import { UserDetailService } from './shared/user-detail.service';

@Component({
  selector: 'nav',
  template: ` <mat-toolbar>
    <button class="btn" mat-button routerLink="/">HOME</button>
    <button
      *ngIf="service.isAuthenticated"
      class="btn"
      mat-button
      routerLink="/app-appointment-detail-form"
    >
      BOOK NOW
    </button>
    <button
      *ngIf="service.isAuthenticated"
      class="btn"
      mat-button
      routerLink="/app-appointment-details"
    >
      BOOKINGS
    </button>
    <span style="flex: 1 1 auto"></span>
    <button
      *ngIf="!service.isAuthenticated"
      class="btn"
      mat-button
      routerLink="/app-login-details"
    >
      LOG IN
    </button>
    <button
      *ngIf="!service.isAuthenticated"
      class="btn"
      mat-button
      routerLink="/app-signup-details"
    >
      SIGN UP
    </button>
    <button
      *ngIf="service.isAuthenticated"
      class="btn"
      mat-button
      (click)="service.logout()"
    >
      LOG OUT
    </button>
  </mat-toolbar>`,
})
export class NavComponent {
  constructor(public service: UserDetailService) {}
}
