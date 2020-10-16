import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../global.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  @ViewChild('f', {static:true}) form: ElementRef;
  file:any;
  public user: any = {
    firstName: '',
   
  }
  Form=new FormGroup({
    
   firstname: new FormControl('', [ Validators.required,Validators.maxLength(20),Validators.pattern(/^[A-Z ]*$/)]),
    
  });
  

  constructor(private router: Router, private globalService: GlobalService) { }

  ngOnInit() {
  }
  gotoRegister(){
     }
  onSubmit() {
    console.log(this.form);
    if(this.form['valid']) {
      // console.log(true)
      // console.log(this.user);
      this.user['file'] = this.file;
      this.globalService.setData(this.user);
      this.router.navigate(['/userprofile']);

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.user, null, 4));
    } else {
      // console.log(false);
    }
 
  }
  getFile(event: Event) {
    this.file = event.target['files'][0];
    var reader = new FileReader();
    reader.onloadend = () =>  {
      this.file = reader.result;
      // console.log(this.file);
      }
      reader.readAsDataURL(this.file);
  }
}
