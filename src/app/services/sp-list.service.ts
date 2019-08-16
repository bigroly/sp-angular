import { Injectable } from '@angular/core';
import { sp } from '@pnp/sp';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpListService {


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

  public postListItem(listName: string, object: any): Promise<any>{
    return new Promise((resolve, reject) => {
      sp.web.lists.getByTitle(listName).items.add(object).then((result) => {
        resolve(result);
      }).catch((err) => {
        reject(err);
      });
    })
  }

}
