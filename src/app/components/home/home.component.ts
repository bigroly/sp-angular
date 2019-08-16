import { Component, OnInit } from '@angular/core';
import { SpUserService } from '../../services/sp-user.service';
import { UserProfile } from 'src/models/userProfile';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userProfile: UserProfile;

  constructor(private spUserService: SpUserService) { 
    this.userProfile = new UserProfile();
  }

  ngOnInit() {
    this.spUserService.getMyProfile().then((retProfile) => {
      this.userProfile = retProfile;
    });
  }

}
