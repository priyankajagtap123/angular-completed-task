import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule}from'@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';

import { UserprofileComponent } from './userprofile/userprofile.component';
import { GlobalService } from './global.service';
import{HttpClientModule} from'@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    UserprofileComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule, ReactiveFormsModule
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent],
  // entryComponents:[UserdefineComponent]
})
export class AppModule { }
