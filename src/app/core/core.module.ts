import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { NavigationComponent } from './components/navigation/navigation.component';


@NgModule({
  declarations: [
    NavigationComponent,
  ],
  exports: [
    NavigationComponent,
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
