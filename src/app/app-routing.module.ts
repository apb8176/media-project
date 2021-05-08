import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [  
  { path :'', redirectTo:'/home',pathMatch:'full' },
  { path: 'gallery', component :GalleryComponent },
  { path: 'home', component :HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
