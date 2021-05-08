import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PageLoadingService } from '../services/page-loading.service';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'angulartoastr';
  showModal: boolean;
  registerForm: FormGroup;
  submitted = false;
  user :any;
  n:number = 0;
  userId : string;
  password: string;
  userFlag:boolean = false;
  showWarning:boolean = false;
  
  constructor(private formBuilder: FormBuilder, 
              private userDataService:UserDataService,
              private pageLoadingService: PageLoadingService,
              private router :Router ) { }
  show()
  {
    this.showModal = true; // Show-Hide Modal Check    
  }
  //Bootstrap Modal Close event
  hide()
  {
    this.showModal = false;
  }
  showGallery(){
    //this.router.navigate(['gallery']);
    this.pageLoadingService.loadedFeature = 'gallery';
  }
  showHome(){
    //this.router.navigate(['gallery']);
    this.pageLoadingService.loadedFeature = 'home';
  }
  showAboutus(){
    //this.router.navigate(['gallery']);
    this.pageLoadingService.loadedFeature = 'about-us';
  }
  signout(){
    this.userFlag = false;
    this.userDataService.currentUser.userid = '';
    this.userDataService.currentUser.username = '';
    this.userDataService.currentUser.password = '';
    this.userDataService.currentUser.status = false;
    this.userId= null;
    this.password=null;
    this.pageLoadingService.loadedFeature='home';    
  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });
}
// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }
onSubmit() {
    this.n = 0;
    this.showWarning = false;
    console.log("Submitted"+this.showWarning);
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    console.log("Submitted2");
    this.user = this.userDataService.userData;
    while(this.n < this.user.length){
      if(this.userId===this.user[this.n].userid){
        if(this.password===this.user[this.n].password){
          this.userDataService.currentUser.userid = this.user[this.n].userid;
          this.userDataService.currentUser.username = this.user[this.n].username;
          this.userDataService.currentUser.status = true;
         // this.userDataService.currentUser.password = this.user[this.n].password;
          this.userFlag = true;console.log("Submitted3");
          this.pageLoadingService.loadedFeature='home';
        }
      }
      this.n++;
    }   
    if( this.userFlag === true){
      this.showModal = false;
    }
    else{
      this.showWarning = true;
    }
    if(this.submitted&&!this.showWarning)
    {
      this.showModal = false;
    }
    console.log("UserName"+this.userDataService.currentUser.username);
    
}
  get userName(){
    return(this.userDataService.currentUser.username);
  }
  
}
