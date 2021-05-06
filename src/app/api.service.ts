import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getUsers(userName:string){
    if(userName==''){
      return this.http.get('https://api.github.com/search/users?q=%22%22');
    }else{
      return this.http.get('https://api.github.com/search/users?q='+`${userName}`);
    }
  }

  getUser(userName:string){
    return this.http.get('https://api.github.com/users/'+`${userName}`);
  }
}
