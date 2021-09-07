import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}

  scrollTo(elementId: string): void {
    document
      .getElementById(elementId)
      .scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  downloadPdf(): void {
    window.open('../../assets/pdfs/curriculo-william-cesar.pdf', 'blank');
  }
}
