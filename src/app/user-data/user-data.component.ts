import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {
  usersList:any=null;
  searchName: string = '';
  loadingIndicator=true;

  constructor(private api:ApiService,private _router:Router){}
  ngOnInit() {
    this.api.getUsers(this.searchName).subscribe(
      result =>{
        this.usersList=result;
        this.loadingIndicator=false;
      }
    );
  }

  @Input() public user: any;

  fetchUser(userData:any,pageName:string){
    this._router.navigate([`${pageName}`],{state: { name:userData } });
  }
  search(){
    this.ngOnInit();
  }
}
