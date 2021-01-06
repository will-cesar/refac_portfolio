import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  scrollTo(elementId: string) {
    document.getElementById(elementId).scrollIntoView({ behavior: "smooth", block: "start" });
  }

  downloadPdf() {
    window.open('../../assets/pdfs/william-cesar-andrade-da-rocha.pdf', 'blank');
  }
}
