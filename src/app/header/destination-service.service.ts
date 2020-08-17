import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse,HttpBackend,HttpHeaders } from '@angular/common/http';
import { Destination} from './destination';
import { throwError ,Observable} from 'rxjs';
import  { catchError,map} from 'rxjs/operators';
import { headersToString } from 'selenium-webdriver/http';
@Injectable({
  providedIn: 'root'
})
export class DestinationServiceService {

    serverUrl='http://localhost:6162';
    errorData:{};
    httpOptions={
      headers: new HttpHeaders({'Content-Type':'application/josn'})
  
    };
    private http:HttpClient;

  constructor(handeler:HttpBackend) {
    this.http=new HttpClient(handeler);

   }

   get_des():Observable<Destination[]>
   {
     console.log(this.serverUrl);
    return  this.http.get<Destination[]>(this.serverUrl + '/home').pipe(
         catchError(this.handleError)
       );
    
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
