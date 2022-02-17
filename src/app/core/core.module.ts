import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeaderComponent } from './components/header/header.component';
import { SpinnerOverlayComponent } from './components/spinner-overlay/spinner-overlay.component';


@NgModule({
  declarations: [
    NavigationComponent,
    HeaderComponent,
    SpinnerOverlayComponent,
  ],
  exports: [
    NavigationComponent,
    HeaderComponent,
    SpinnerOverlayComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,      
    }
  ]
})
export class CoreModule { }
