import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private userDataService:UserDataService) { }
  loginStatus:boolean;
  ngOnInit(): void {
    this.loginStatus=this.userDataService.currentUser.status;
  }
  

}
