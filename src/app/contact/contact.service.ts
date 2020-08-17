import { Injectable } from '@angular/core';
import {  HttpClient,HttpBackend,HttpErrorResponse,HttpHeaders} from '@angular/common/http';
import { throwError,Observable} from 'rxjs';
import { catchError} from 'rxjs/operators';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {


  link_url='http://localhost:6162';
  errorData:{};
  httpOptions={
    headers:new HttpHeaders({'Content-Type':'application/json'})
  };

  private http:HttpClient;
  constructor(handler:HttpBackend) {
    this.http=new HttpClient(handler);
   }




       save_contact_data(formdata:Contact):Observable<any>
       {
         console.log(formdata);
          return this.http.post<Contact>(this.link_url + '/contact', formdata , this.httpOptions).pipe(catchError(this.handleError));
       }




















   /* Exceptional handlimg code */
   private handleError(error: HttpErrorResponse)
   {
     if(error.error instanceof ErrorEvent)
     {
       console.error('An error occurred:', error.error.message)
     }
     else{
       console.error(`Backend retured code ${error.status},` + `Body was: ${error.error}`);
     }

     this.errorData={
       errorTitle:'Oops ! Request for document failed',
       errorDesc:'Something bad Happend. Plaese try again.'
     };
     return throwError(this.errorData);
   }
}
