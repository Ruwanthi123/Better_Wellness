import {Component, OnInit} from '@angular/core';
import {JwtService} from "./service/jwt.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'jwt-angular';
  isLoginUser = false;

  onUserLoginSub = new Subscription();

  constructor(private jwtService: JwtService) {
  }

  ngOnInit(): void {


    this.onUserLoginSub = this.jwtService.onLoginResponseChangeSub.subscribe(
      (res: any) => {
        if(res != null){
          this.isLoginUser=true;
        }
      }
    );

  }
}
