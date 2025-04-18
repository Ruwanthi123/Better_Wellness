import { Component } from '@angular/core';
import { JwtService } from 'src/app/service/jwt.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {


  message: string;

  constructor(
    private service: JwtService
  ) { }

  ngOnInit() {
    this.getCounsellors();
  }

  getCounsellors() {
    this.service.getCounsellors().subscribe(
      (response) => {
        console.log(response);
        this.message = response.message;
      }
    )
  }
}
