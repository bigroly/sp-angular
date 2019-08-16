import { Component, OnInit } from '@angular/core';
import { SpUserService } from '../../services/sp-user.service';
import { UserProfile } from 'src/models/userProfile';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  userProfile: UserProfile = new UserProfile();
  isCollapsed: boolean = true;

  constructor(private spUserService: SpUserService) { 
    this.spUserService.getMyProfile().then((res)=> {
      this.userProfile = res;
    });
  }

  ngOnInit() {
    
  }

  toggleCollapse(){
    this.isCollapsed = !this.isCollapsed;
  }

}
