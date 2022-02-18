import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { SpinnerOverlayService } from 'src/app/core/services/spinner-overlay.service';
import { User } from '../models/user.model';
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root'
})
export class UsersResolver implements Resolve<User[]> {
  constructor(
    private usersService: UsersService,
    private spinnerOverlayService: SpinnerOverlayService,
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> {
    this.spinnerOverlayService.show();

    return this.usersService.getAllUsers().pipe(
      tap(() => this.spinnerOverlayService.hide()),
      catchError(error => {
        console.error(error);
        this.spinnerOverlayService.hide();

        //  TODO maybe handle this more gracefully 
        //  ie. redirect to an error page or similar
        return [];
      })
    );
  }
}
