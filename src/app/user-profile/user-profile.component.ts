import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  User = {
    name: 'Norris',
    firstName: 'Chuck',
    age: 78,
    quote: '',
    photo: 'https://i.skyrock.net/1614/75511614/pics/3013112307_1_7_rllsM1OR.jpg'
  }

  clic: boolean

  constructor() { }

  ngOnInit() {
  }

  showAge() {
    this.clic = !this.clic
  }
}
