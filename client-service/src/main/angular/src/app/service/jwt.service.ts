import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {CommonSettings} from "../settings/common.settings";

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  onLoginResponseChangeSub : Subject<any> = new Subject();
  constructor(private http: HttpClient) { }

  register(signRequest: any): Observable<any> {
    return this.http.post(CommonSettings.BASE_URL + 'signup', signRequest)
  }

  login(loginRequest: any): Observable<any> {
   let res = this.http.post(CommonSettings.BASE_URL + 'login', loginRequest);
    // @ts-ignore
    this.onLoginResponseChangeSub.next(res);
   return res;
  }

  getCounsellors(): Observable<any> {
    return this.http.post('http://localhost:8081/' + 'profiles/getCounsellors',
      {},
      {
        headers: this.createAuthorizationHeader()
      }
    );
  }


  private createAuthorizationHeader() {
    const jwtToken = localStorage.getItem('jwt');
    if (jwtToken) {
      console.log("JWT token found in local storage", jwtToken);
      return new HttpHeaders().set(
        "Authorization", "Bearer " + jwtToken
      )
    } else {
      console.log("JWT token not found in local storage");
    }
    return null;
  }

}
