import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    //  This token was created with credentials.asc on Win10; based on username:password provided
    private _staticToken = "NDBjOWI3ZDVjYjBlY2I5YWJhYWI6NzZjNWQxYjIwMWM2ZDUyY2VhZTYzMTg4ZmU2ZDA2";

    constructor(
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {        
        //  TODO maybe check if request goes to learn upon API and only then intercept

        request = request.clone({
            setHeaders: {
                Authorization: `Basic ${this._staticToken}`
            }
        });

        return next.handle(request);
    }
}