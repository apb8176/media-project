import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageLoadingService {

  constructor() { }
  loadedFeature:string='home';
}
