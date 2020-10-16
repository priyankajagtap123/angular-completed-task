import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { ReplaySubject } from 'rxjs';
import { Users } from '../Users';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  file: any;
  
  selectedFile:any;
  subject$ = new ReplaySubject(1);
  constructor(private globalService: GlobalService) {
   }

   columns = ["First Name","Last Name", "Email","Country","State"];
  
  //  users : Users[] = [];
  users:any;

  ngOnInit(): void {
    this.globalService.getData().subscribe((response)=> {
      this.setData(response);
    });

  }
  setData(response) {
    this.users = response;
  }
  readURL(input) {
    this.file = input.files[0];
  }
 

  onFileSelect(event) {
    this.selectedFile = event.target['files'][0];
    var reader = new FileReader();
      reader.onloadend = () =>  {
        
        this.users =Object.assign(this.users ? this.users: {}, {file: reader.result})
    
      }
      console.log(this.selectedFile.name);
      reader.readAsDataURL(this.selectedFile);
  }
  getData(){
    return this.subject$.asObservable();
    
  }
}
