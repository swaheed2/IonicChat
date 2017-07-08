import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class DatabaseProvider {

  constructor(public db: AngularFireDatabase) {
  }

  getChats():FirebaseListObservable<any>{
    return this.db.list('/chats');
  }

}
