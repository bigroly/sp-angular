import { Injectable } from '@angular/core';
import { sp } from '@pnp/sp';
import { environment } from '../../environments/environment';

import { IUserProfile, UserProfile } from '../../models/userProfile';

@Injectable({
  providedIn: 'root'
})
export class SpUserService {

  constructor() { 
    sp.setup({
      sp: {
        baseUrl: environment.spUrl,
        headers: {
          'Accept': 'application/json;odata=verbose'
        }
      }
    });
  }

  getMyProfile(): Promise<UserProfile>{
    return new Promise((resolve, reject) => {
      let myProfile = new UserProfile();
      
      
      sp.profiles.myProperties.get().then((res) => {
        console.log(res);  
  
        myProfile.AccountName = res.AccountName;
        myProfile.DisplayName = res.DisplayName;
        myProfile.Email = res.Email;
        myProfile.JobTitle = res.Title;
        myProfile.Department = res.UserProfileProperties.results.find(property => property.Key === "Department").Value;
        myProfile.ManagerEmail = res.UserProfileProperties.results.find(property => property.Key === "Manager").Value; 
        myProfile.UserGuid = res.UserProfileProperties.results.find(property => property.Key === "UserProfile_GUID").Value; 
        resolve(myProfile);
      }).catch((err) => {
        reject(err);
      });
    });       
  }

}
