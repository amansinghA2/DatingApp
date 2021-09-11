import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor{
    
    intercept(req :HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError(error => {
                if(error instanceof HttpErrorResponse){
                    const applicationError = error.headers.get('Application-Error');
                    if(applicationError){
                        console.error(applicationError);
                        return throwError(applicationError);
                    }
                  const serverError = error.error;
                  let modealStateError = '';
                  if(serverError && typeof serverError === 'object'){
                      for(const key in serverError){
                        if(serverError[key]){
                            modealStateError += serverError[key] + '\n';
                        }
                      }
                  }
                  return throwError(modealStateError || serverError || 'Server Error');      
                }
                return throwError(null);
            }) 
        );
    }

}

