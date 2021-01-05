import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  scrollTo(elementId: string) {
    document.getElementById(elementId).scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
