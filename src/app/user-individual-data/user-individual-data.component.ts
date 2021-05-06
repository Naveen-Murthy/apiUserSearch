import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-individual-data',
  templateUrl: './user-individual-data.component.html',
  styleUrls: ['./user-individual-data.component.scss']
})
export class UserIndividualDataComponent implements OnInit {
  individualUser:any;
  loadingIndicator=true;

  constructor(private api:ApiService) {
  }

  ngOnInit(): void {
    this.api.getUser(history.state.name).subscribe(
      (data)=>{
        this.individualUser=data;
        this.loadingIndicator=false;
      }
    )
  }

}
