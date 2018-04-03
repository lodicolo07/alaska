import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export class User {
  name: string;
  email: string;
 
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

@Injectable()
export class AuthServiceProvider {
  currentUser: User;
 
  public login(credentials) {
    console.log(credentials);
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!
        let access = (credentials.password === "123" && credentials.email === "admin@admin.com");
        this.currentUser = new User('Felix', 'admin@admin.com');
        observer.next(access);
        observer.complete();
      });
    }
  }

  // constructor(public http: HttpClient) {
  //   console.log('Hello AuthServiceProvider Provider');
  // }

}
